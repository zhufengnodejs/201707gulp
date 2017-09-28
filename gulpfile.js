let gulp = require('gulp');
//GulpUglifyError: unable to minify JavaScript
/**
 * 1.gulp插件名称 gulp-开头
 * 2.gulp插件返回的都是函数
 */
let concat = require('gulp-concat');//合并
let uglify = require('gulp-uglify');//丑化，压缩
let rename = require('gulp-rename');//重命名
let babel = require('gulp-babel');
//JS需要经过哪些处理 合并，压缩
gulp.task('js',function(){
  gulp.src('./src/js/*.js')
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest('./build/js'));
});