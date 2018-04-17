const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('app', ['app.sass', 'app.js'])

gulp.task('app.sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('app.js', function() {
  return gulp.src('app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/assets/js'))
})
