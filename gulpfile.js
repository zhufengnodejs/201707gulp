let gulp = require('gulp');
//GulpUglifyError: unable to minify JavaScript
/**
 * 1.gulp插件名称 gulp-开头
 * 2.gulp插件返回的都是函数
 */
/*let concat = require('gulp-concat');//合并
let rename = require('gulp-rename');//重命名
let less = require('gulp-less');
let cleanCss = require('gulp-clean-css');*/
//会自动扫描并读取package.json下面的模块,会依次下载这些模块,并且把这些加载到的模块全部都挂载到$对象上
let $ = require('gulp-load-plugins')();
//JS需要经过哪些处理 合并，压缩
gulp.task('serve',function(){
  $.connect.server({
    port:8080,
    root:'build',
    livereload:true //启动自动加载
  });
});
gulp.task('html',function(){
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
    .pipe($.connect.reload())//强制浏览器自动刷新
});
gulp.task('watch',function(){
  gulp.watch('./src/index.html',['html']);
});
//依赖的任务
gulp.task('default',['serve','watch']);