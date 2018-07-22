const gulp = require('gulp'),
    cfg = require('../package.json').config,
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade');

gulp.task('dev:jade', function() {
    gulp.src(cfg.src_jade + '/*.jade')
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(cfg.dev))
});

gulp.task('prod:jade', function() {
    gulp.src(cfg.src_jade + '/*.jade')
        .pipe(plumber())
        .pipe(jade({
            pretty: false
        }))
        .pipe(gulp.dest(cfg.build))
});