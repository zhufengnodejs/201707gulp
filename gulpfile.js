let gulp = require('gulp');
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
gulp.task('inject',function(){
  //这是将要插入JS和CSS的文件
  let target = gulp.src('./src/index.html');
  let source = gulp.src(["build/**/*.js","build/**/*.css"]);
  target.pipe($.inject(source,{
    ignorePath:'build/',addRootSlash:false
  })).pipe(gulp.dest('./build'));
});
//依赖的任务
gulp.task('default',['serve','watch']);