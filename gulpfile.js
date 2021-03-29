/**
 * Simple gulpfile for CI :
 * Source files have to be located in assets folder
 * Build file will be output to a public folder
 */

const { src, dest, parallel } = require('gulp');

const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');


function css() {
  return src('assets/sass/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('public/css'))
}

function appjs() {
  return src('assets/js/app.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('public/js', { sourcemaps: true }))
}

// function adminjs() {
//     return src('assets/js/admin.js', { sourcemaps: true })
//       .pipe(concat('admin.min.js'))
//       .pipe(dest('public/js', { sourcemaps: true }))
//   }

exports.css = css;
exports.appjs = appjs;
// exports.adminjs = adminjs;

exports.default = parallel(css, appjs);
// exports.default = parallel(css, appjs, adminjs);
          