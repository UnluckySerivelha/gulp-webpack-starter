const gulp = require('gulp'),
    cfg = require('../package.json').config,
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    gcmq = require('gulp-group-css-media-queries'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('dev:scss', function () {
    return gulp.src(cfg.src_scss + '/main.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(cfg.dev_css))
});

gulp.task('prod:scss', function () {
    return gulp.src(cfg.src_scss + '/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ["last 15 versions"],
            cascade: true
        }))
        .pipe(gcmq())
        .pipe(cleanCSS({compatibility: "ie8"}))
        .pipe(gulp.dest(cfg.build_css));
});