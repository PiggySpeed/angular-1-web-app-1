// Copied from: https://gist.github.com/mlouro/8886076

'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
//var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

var notify = require('gulp-notify');

var buffer = require('vinyl-buffer');
var argv = require('yargs').argv;
// less
var less = require('gulp-less');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var sourcemaps = require('gulp-sourcemaps');
// BrowserSync
var browserSync = require('browser-sync');
// js
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// image optimization
var imagemin = require('gulp-imagemin');
// testing/mocha
var mocha = require('gulp-mocha');

// gulp build --production
var production = !!argv.production;
// determine if we're doing a build
// and if so, bypass the livereload
var build = argv._.length ? argv._[0] === 'build' : false;
var watch = argv._.length ? argv._[0] === 'watch' : true;

// --------------------------
// ERROR HANDLING
// --------------------------
var handleError = function(task) {
  return function(err) {
    notify.onError({
      message: task + ' failed, check the logs..',
      sound: false
    })(err);

    gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
  };
};

// --------------------------
// CUSTOM TASK METHODS
// --------------------------
var tasks = {
  // --------------------------
  // Delete build folder
  // --------------------------
  clean: function(cb) {
    del(['./build'], cb);
  },
  // --------------------------
  // Copy static assets
  // --------------------------
  assets: function() {
    return gulp.src('./app/assets/**/*')
      .pipe(gulp.dest('./build/assets'));
  },
  // --------------------------
  // HTML
  // --------------------------
  // html templates (when using the connect server)
  templates: function() {
    gulp.src('./app/**/*.html')
      .pipe(gulp.dest('./build'));
  },
  // --------------------------
  // LESS
  // --------------------------
  less: function() {
    return gulp.src(['./app/styles/*.less', './app/styles/**/*.less'])
      // sourcemaps + sass + error handling
      .pipe(gulpif(!production, sourcemaps.init()))
      .pipe(less({
        sourceComments: !production,
        outputStyle: production ? 'compressed' : 'nested'
      }))
      .on('error', handleError('LESS'))
      // generate .maps
      .pipe(gulpif(!production, sourcemaps.write({
        'includeContent': false,
        'sourceRoot': '.'
      })))
      // autoprefixer
      .pipe(gulpif(!production, sourcemaps.init({
        'loadMaps': true
      })))
      .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
      // we don't serve the source files
      // so include less content inside the sourcemaps
      .pipe(sourcemaps.write({
        'includeContent': true
      }))
      // write sourcemaps to a specific directory
      // give it a file and save
      .pipe(gulp.dest('./build/styles'));
  },
  // --------------------------
  // Browserify
  // --------------------------
  browserify: function() {
    var bundler = browserify('./app/app.js', {
      debug: !production,
      cache: {}
    });
    // determine if we're doing a build
    // and if so, bypass the livereload
    var build = argv._.length ? argv._[0] === 'build' : false;
    if (watch) {
      bundler = watchify(bundler);
    }
    var rebundle = function() {
      return bundler.bundle()
        .on('error', handleError('Browserify'))
        .pipe(source('build.js'))
        .pipe(gulpif(production, buffer()))
        //.pipe(gulpif(production, uglify()))
        .pipe(gulp.dest('./build'));
    };
    bundler.on('update', rebundle);
    return rebundle();
  },
  // --------------------------
  // Optimize asset images
  // --------------------------
  optimize: function() {
    return gulp.src('./app/assets/**/*.{gif,jpg,png,svg}')
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        // png optimization
        optimizationLevel: production ? 3 : 1
      }))
      .pipe(gulp.dest('./build/assets'));
  },
  // --------------------------
  // Testing with mocha
  // --------------------------
  test: function() {
    return gulp.src('./app/tests/*test.js', {read: false})
      .pipe(mocha({
          'ui': 'bdd',
          'reporter': 'spec'
        })
      );
  }
};

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./build"
    },
    open: false,
    port: process.env.PORT || 8080
  });
});

gulp.task('reload-less', ['less'], function(){
  browserSync.reload();
});
gulp.task('reload-js', ['browserify'], function(){
  browserSync.reload();
});
gulp.task('reload-templates', ['templates'], function(){
  browserSync.reload();
});

// --------------------------
// CUSTOMS TASKS
// --------------------------
gulp.task('clean', tasks.clean);
// for production we require the clean method on every individual task
var req = build ? ['clean'] : [];
// individual tasks
gulp.task('templates', req, tasks.templates);
gulp.task('assets', req, tasks.assets);
gulp.task('less', req, tasks.less);
gulp.task('browserify', req, tasks.browserify);
gulp.task('optimize', tasks.optimize);
gulp.task('test', tasks.test);

// --------------------------
// DEV/WATCH TASK
// --------------------------
gulp.task('watch', ['assets', 'templates', 'less', 'browserify', 'browser-sync'], function() {

  // --------------------------
  // watch:less
  // --------------------------
  gulp.watch(['./app/styles/*.less', './app/styles/**/*.less'], ['reload-less']);

  // --------------------------
  // watch:js
  // --------------------------
  gulp.watch('./app/**/**/*.js', ['reload-js']);

  // --------------------------
  // watch:html
  // --------------------------
  gulp.watch('./app/**/*.html', ['reload-templates']);

  gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});

// build task
gulp.task('build', [
  'clean',
  'templates',
  'assets',
  'less',
  'browserify'
]);

gulp.task('default', ['watch']);

// gulp (watch) : for development and livereload
// gulp build : for a one off development build
// gulp build --production : for a minified production build