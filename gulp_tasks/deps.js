const gulp = require('gulp')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.js', 'deps.css'])

gulp.task('deps.js', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
  ])
  .pipe(concat('deps.js'))
  .pipe(gulp.dest('public/assets/js'))
})

gulp.task('deps.css', function() {
  return gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
  ])
  .pipe(concat('deps.css'))
  .pipe(gulp.dest('public/assets/css'))
})
