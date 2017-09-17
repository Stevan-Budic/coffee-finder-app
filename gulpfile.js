var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');



// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('development/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('public/img'))
);


// Compile Sass
gulp.task('sass', function(){
  gulp.src('development/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('public/css'));
});



gulp.task('default', ['imageMin', 'sass']);

gulp.task('watch', function(){
  gulp.watch('development/scss/*.scss', ['sass']);
});