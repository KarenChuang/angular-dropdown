var gulp = require('gulp'),
	  sass = require('gulp-sass'),
  connect = require('gulp-connect');

gulp.task('sass', function(){
	return gulp.src('src/sass/*.scss')
	.pipe(sass().on('error', sass.logError)) //语法报错gulp也不会中断
	.pipe(gulp.dest('src/css'));
})

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    port: 8885,
    livereload: true
  });
});

gulp.task('watch', function(){
	gulp.watch('src/sass/*.scss' ,['sass']);
})


gulp.task('default', ['connect','sass','watch']);
