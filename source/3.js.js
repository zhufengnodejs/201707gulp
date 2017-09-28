//引入gulp模块
let gulp = require('gulp');
/**
 * gulp.src 返回一个可读流
 * gulp.dest 返回一个可写流
 */
gulp.task('watch',function(){
  //watch就是监控文件的变化，当文件发生变化之后执行对应的回调函数
  /*gulp.watch('./src/index.html',function(event){
    /!*
     { type: 'changed', path: 'E:\\201707gulp\\src\\index.html' }
    * *!/
    console.log(`${event.path} ${event.type}`);
  });*/
  gulp.watch('./src/index.html',['html']);
});

gulp.task('html',function(){
  console.log('html');
});
