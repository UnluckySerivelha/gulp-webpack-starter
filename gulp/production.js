const gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    clean = require('gulp-clean'),
    cfg = require('../package.json').config;


gulp.task('prod:clean', function () {
    return gulp.src(cfg.build + '/*', {read: false})
        .pipe(clean());
});

gulp.task('prod:copy-other', function () {
    return gulp.src('./' + cfg.src + '*.*')
        .pipe(gulp.dest(cfg.build));
});

gulp.task('prod:build', gulpSequence('prod:clean', ['prod:copy-other', 'prod:font', 'prod:js', 'prod:jade', 'prod:images', 'prod:scss']));
