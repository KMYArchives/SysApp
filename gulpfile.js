var gulp = require('gulp'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber');

// Compile the sass file's
gulp.task('sass-compiler', () => {
	return gulp.src('./assets/sass/**/*.{scss, sass}')
		.pipe(
			sass.sync({
				comments: false,
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(gulp.dest('./assets/css/'));
});

// Build the app files
gulp.task('app', () => {
	return gulp.src(['./assets/js/app/**/*.js'])
		.pipe(plumber())
		.pipe(babel({
			compact: false,
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/'));
});

// Build the engine files
gulp.task('engine', () => {
	return gulp.src(['./assets/js/engine/**/*.js'])
		.pipe(plumber())
		.pipe(babel({
			compact: false,
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(concat('engine.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/'));
});

// Build the gui files
gulp.task('bundle', () => {
	return gulp.src(['./assets/js/src/**/*.js'])
		.pipe(plumber())
		.pipe(babel({
			compact: false,
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(concat('bundle.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/'));
});

// Watch the js files
gulp.task('js', () => {
	gulp.watch(['assets/js/src/**/*.js'], gulp.parallel(['bundle']));
});

// Watch the sass files
gulp.task('sass', () => {
	gulp.watch(['assets/sass/**/*.{scss, sass}'], gulp.parallel(['sass-compiler']));
});