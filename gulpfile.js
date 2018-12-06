var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		notify = require('gulp-notify'),
		gcmq = require('gulp-group-css-media-queries');

gulp.task('sass', function() {
	return gulp.src('app/sass/main.sass')
		.pipe(sass({outputStyle: 'expand'}).on('error', notify.onError({
			message: "<%= error.message %>",
			title: "Sass Error!"
		})))
		.pipe(gcmq())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('default', ['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['app/*.html', 'app/js/*.js'], browserSync.reload);
});