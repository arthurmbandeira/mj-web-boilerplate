const gulp = require('gulp');
const connect = require('gulp-connect');
const preprocess = require('gulp-preprocess');
const runsequence = require('run-sequence');
const watch = require('gulp-watch');

require('./gulp_tasks/deps')
require('./gulp_tasks/app')

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(preprocess())
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  watch('app/**/*.html', () => gulp.start('html'));
  watch('app/**/*.scss', () => gulp.start('app.sass'));
  watch('app/**/*.js', () => gulp.start('app.js'));
});

gulp.task('default', runsequence('deps', 'app', 'html', 'watch', 'connect'))
