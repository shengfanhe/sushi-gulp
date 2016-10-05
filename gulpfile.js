var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require ('gulp-sourcemaps');
var browserSync = require ('browser-sync');

var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

var sassSources = './scss/**/*.scss';
var sassOutput = './app/css';
var htmlSource = 'app/**/*.html';

gulp.task('sass', function(){
    // console.log('testing 1 2 3')
    return gulp.src(sassSources)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassOutput))
    .pipe(browserSync.stream())
});

gulp.task('serve', ['sass'], function(){

	browserSync.init({
		server: './app'
	})
	gulp.watch('ssassSources', ['sass'])
	gulp.watch('htmlSource').on('change', browserSync.reload);
});