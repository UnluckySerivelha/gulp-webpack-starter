const gulp = require('gulp'),
    cfg = require('../package.json').config,
    newer = require('gulp-newer');

gulp.task('dev:font', function () {
    return gulp.src(cfg.src_font + '/**/*')
        .pipe(newer(cfg.dev_font))
        .pipe(gulp.dest(cfg.dev_font));
});

gulp.task('prod:font', function () {
    return gulp.src(cfg.src_font + '/**/*')
        .pipe(gulp.dest(cfg.build_font));
});