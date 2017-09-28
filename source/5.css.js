let gulp = require('gulp');
//GulpUglifyError: unable to minify JavaScript
/**
 * 1.gulp插件名称 gulp-开头
 * 2.gulp插件返回的都是函数
 */
let concat = require('gulp-concat');//合并
let rename = require('gulp-rename');//重命名
let less = require('gulp-less');
let cleanCss = require('gulp-clean-css');
//JS需要经过哪些处理 合并，压缩
gulp.task('css',function(){
  gulp.src('./src/less/*.less')
    .pipe(less())//把less文件编译成css文件
    .pipe(concat('xx.css'))//合并成all.css
    .pipe(gulp.dest('./build/css'))//输出到目标目录
    .pipe(cleanCss())//压缩CSS
    .pipe(rename(function(file){
      //{ dirname: '.', basename: 'total', extname: '.css' }
      file.basename += '.min';
    }))
    .pipe(gulp.dest('./build/css'))//输出到目标目录
});