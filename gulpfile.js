var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var inject = require('gulp-inject');

gulp.task('svgstore', function () {
  var svgs = gulp
    .src('desktop.blocks/**/*.svg')
    .pipe(svgstore({ inlineSvg: true }));

  function fileContents(filePath, file) {
    var content = file.contents.toString();
    content = content.replace(/\n/g,'');
    return content;
  }

  return gulp
    .src('desktop.blocks/svg-lib/src/svg-lib.bh.js')
    .pipe(inject(svgs, { transform: fileContents }))
    .pipe(gulp.dest('desktop.blocks/svg-lib/'));
});
