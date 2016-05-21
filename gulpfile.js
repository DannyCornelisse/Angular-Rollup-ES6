
'use strict';

var gulp = require('gulp');

gulp.task('serve', ['watch'], function() {

	var browserSync = require('browser-sync');

	browserSync.init({
		server: { 
			baseDir: '.' 
		},
		port: 5002,
		logLevel: 'info'
	});
});

gulp.task('watch', function() {
	
	// compile js
	gulp.watch('./js/**/**.js', ['bundle:js']);

});

gulp.task('bundle:js', function() {

	var rollup = require('gulp-rollup'),
		sourcemaps = require('gulp-sourcemaps'),
		browserSync = require('browser-sync'),
		string = require('rollup-plugin-string');

	gulp.src('js/main.js', {read: false})
		.pipe(rollup({
			sourceMap: true,
			plugins: [
				string(
					{extensions: ['html']}
				)
			]
		})).on('error', function(err) {
			console.error(err.message);
            browserSync.notify(err.message, 3000);
            this.emit('end');
		})
		.pipe(sourcemaps.write(".")) // this only works if the sourceMap option is true
		.pipe(gulp.dest('_compiled/js'));
});