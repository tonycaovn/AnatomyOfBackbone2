var gulp = require('gulp'),
    del = require('del'),
    run = require('gulp-run'),
    less = require('gulp-less'),
    sass = require('gulp-ruby-sass'),
    htmlmin = require('gulp-htmlmin'),
    ngTemplates = require('gulp-ng-templates'),
    cssmin = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    karma = require('karma').server,
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    gulpif = require('gulp-if'),
    zip = require('gulp-zip'),
    path = require('path'),
    browserSync = require('browser-sync'),
    pkg = require('./package.json'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    service = require('gulp-service'),
    reload = browserSync.reload;

/**
 * Running Bower
 */
gulp.task('bower', function() {
  run('bower install').exec();
})

/**
 * Running livereload server
 */
.task('server', function() {
  browserSync({
    server: {
     baseDir: './' 
    }
  });
})