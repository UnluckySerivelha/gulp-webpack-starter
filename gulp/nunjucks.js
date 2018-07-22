const gulp = require('gulp'),
    cfg = require('../package.json').config,
    plumber = require('gulp-plumber'),
    htmlmin = require('gulp-htmlmin'),
    njkRender = require('gulp-nunjucks-render');

gulp.task('dev:njk', function () {
    return gulp.src(cfg.src_njk + '/*.njk')
        .pipe(plumber())
        .pipe(njkRender({
            path: "src/njk/",
            watch: false,
        }))
        .pipe(gulp.dest(cfg.dev))
});

gulp.task('prod:njk', function () {
    return gulp.src(cfg.src_njk + '/*.njk')
        .pipe(njkRender({
            path: cfg.src_njk + '/',
            watch: false,
        }))
        .pipe(htmlmin({
            collapseWhitespace: false,
            minifyCSS: true,
            minifyJS: true,
            preserveLineBreaks: true,
            removeComments: true,
        }))
        .pipe(gulp.dest(cfg.build));
});