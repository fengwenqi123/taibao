/*引入gulp及相关插件 require('node_modules里对应模块')*/
var gulp = require('gulp');
var less=require('gulp-less');
var livereload = require('gulp-livereload');

gulp.task('less', function() {
    gulp.src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});
gulp.task('html', function() {
    gulp.src('views/*.html')
        .pipe(livereload());
});
 
//特别注意：若编译less的时候，同时执行其他操作，有可能引起页面刷新，而不是将样式植入页面
//例如下面任务同时生成sourcemap：
//var sourcemaps = require('gulp-sourcemaps');
//gulp.task('less', function () {
//    gulp.src(['src/less/*.less'])
//        .pipe(sourcemaps.init())
//        .pipe(less())
//        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest('src/css'))
//        .pipe(livereload());
//});
 
gulp.task('watch', function() {
    livereload.listen();
  /*  gulp.watch('views/!*.less', ['less']);*/
    gulp.watch('views/*.html', ['html']);
    gulp.watch('less/*.less', ['html']);
});