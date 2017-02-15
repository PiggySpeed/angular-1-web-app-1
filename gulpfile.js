// helpful: https://www.sitepoint.com/introduction-gulp-js/
// http://mindthecode.com/lets-build-an-angularjs-app-with-browserify-and-gulp/

//var newer = require('gulp-newer');
//var imagemin = require('gulp-imagemin');
//var htmlclean = require('gulp-htmlclean');
//var concat = require('gulp-concat');
//var deporder = require('gulp-deporder');
//var stripdebug = require('gulp-strip-debug');
//var uglify = require('gulp-uglify');
//var less = require('gulp-less');
//var postcss = require('gulp-postcss');
//var assets = require('postcss-assets');
//var autoprefixer = require('autoprefixer');
//var mqpacker = require('css-mqpacker');
//var cssnano = require('cssnano');
//var browserify = require('gulp-browserify');

var gulp = require('gulp');
var gutil = require('gulp-util'); // mainly for logging
// needed because we need to transform browserify into a stream that can be used by gulp plugins
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
// exorcist can extract a source map from a browserify stream
var exorcist = require('exorcist');
var browserSync = require('browser-sync').create();

//var devBuild = (process.env.NODE_ENV !== 'production');
//var folder = {
//  src: 'app/',
//  build: 'build/',
//  dist: 'dist/'
//};

//// Browserify task
//gulp.task('browserify', function() {
//  // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
//  gulp.src(['app/app.js'])
//    .pipe(browserify({
//      insertGlobals: true,
//      debug: true
//    }))
//    // Bundle to a single file
//    .pipe(concat('bundle.js'))
//    // Output it to our dist folder
//    .pipe(gulp.dest(folder.dist));
//});

//// image processing
//gulp.task('images', function() {
//  var out = folder.build + 'images/';
//
//  return gulp.src(folder.src + 'images/**/*')
//    .pipe(newer(out))
//    .pipe(imagemin({ optimizationLevel: 5 }))
//    .pipe(gulp.dest(out));
//});
//
//// html processing
//gulp.task('html', ['images'], function() {
//  var out = folder.build + 'html/';
//  var page = gulp.src(folder.src + '**/*')
//    .pipe(newer(out));
//
//  // minify production code
//  if (!devBuild) {
//    page = page.pipe(htmlclean());
//  }
//
//  return page.pipe(gulp.dest(out));
//});
//
//// javascript processing
//gulp.task('js', function() {
//  var out = folder.build + 'js/';
//  var jsbuild = gulp.src(folder.src + '**/*')
//    .pipe(deporder())
//    .pipe(concat('main.js'));
//
//  if (!devBuild) {
//    jsbuild = jsbuild
//      .pipe(stripdebug())
//      .pipe(uglify());
//  }
//
//  return jsbuild.pipe(gulp.dest(out));
//});
//
//// css processing
//gulp.task('css', ['images'], function() {
//  var out = folder.build + 'css/';
//
//  var postCssOpts = [
//    assets({ loadPaths: ['images/'] }),
//    autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
//    mqpacker
//  ];
//
//  if (!devBuild) {
//    postCssOpts.push(cssnano);
//  }
//
//  return gulp.src(folder.src + 'styles/*')
//    .pipe(less({
//      outputStyle: 'nested',
//      imagePath: 'images/',
//      precision: 3,
//      errLogToConsole: true
//    }))
//    .pipe(postcss(postCssOpts))
//    .pipe(gulp.dest(out));
//});

// bundler
function bundle (bundler) {
  return bundler
    .bundle()
    .on('error', function (e) {
      gutil.log(e.message);
    })
    .pipe(exorcist('./app/dist/app.js.map')) // add source maps
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/dist'))
    .pipe(browserSync.stream());
}

// watch for changes
gulp.task('watch', function() {
  watchify.args.debug = true;
  // watchify works by wrapping browserify
  var watcher = watchify(browserify('./app/app.js', watchify.args));

  bundle(watcher);

  watcher.on('update', function() {
    // bundle any changes that happen
    bundle(watcher);
  });

  // log any changes that happen
  watcher.on('log', gutil.log);

  browserSync.init({
    server: './app',
    logFileChanges: false
  });

  //// image changes
  //gulp.watch(folder.src + 'images/**/*', ['images']);
  //
  //// html changes
  //gulp.watch(folder.src + '**/*', ['html']);
  //
  //// javascript changes
  //gulp.watch(folder.src + '**/*', ['js', 'browserify']);
  //
  //// css changes
  //gulp.watch(folder.src + 'styles/*', ['css']);

});

// run js to create the bundle once only
gulp.task('js', function() {
  return bundle(browserify('./app/app.js'))
});

//// run tasks
//gulp.task('run', ['html', 'css', 'js']);
//
//// default task
//gulp.task('default', ['run', 'watch']);
