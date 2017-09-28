//引入gulp模块
let gulp = require('gulp');
/**
 * gulp.src 返回一个可读流
 * gulp.dest 返回一个可写流
 */
gulp.task('html',function(){
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
});

