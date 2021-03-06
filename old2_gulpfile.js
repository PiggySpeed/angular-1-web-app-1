var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var concat = require('gulp-concat');
var less = require('gulp-less');

gulp.task('browserify', function() {
  var bundler = browserify({
    entries: ['./app/app.js'], // Only need initial file, browserify finds the deps
    debug: true, // Gives us sourcemapping
    cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
  });
  var watcher  = watchify(bundler);

  return watcher
    .on('update', function () { // When any files update
      var updateStart = Date.now();
      console.log('Updating!');
      watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('main.js'))
        // This is where you add uglifying etc.
        .pipe(gulp.dest('./build/'));
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/dist'));
});

// I added this so that you see how to run two watch tasks
gulp.task('css', function () {
  gulp.watch('styles/**/*.less', function () {
    return gulp.src('styles/**/*.css')
      .pipe(less())
      .pipe(concat('main.css'))
      .pipe(gulp.dest('build/'));
  });
});

// Just running the two tasks
gulp.task('default', ['browserify', 'css']);

