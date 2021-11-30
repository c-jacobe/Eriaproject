var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

// fonction build SCSS
function buildScss() {
  return gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
}

// fonction watch
function watchScss() {
  gulp.watch('./src/scss/**/*.scss'), gulp.series(["default"]);
};

exports.default = buildScss
exports.watch = watchScss

