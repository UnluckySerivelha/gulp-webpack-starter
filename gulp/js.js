const gulp = require('gulp'),
    cfg = require('../package.json').config,
    webpackConfig = require('../webpack.config'),
    webpackProdConfig = require('../webpack-prod.config'),
    webpackStream = require('webpack-stream'),
    webpack = require('webpack'),
    minify = require('gulp-minifier');

//Build js for development
gulp.task('dev:js', function () {
    gulp.src(cfg.src_js + '/*.js')
        .pipe(webpackStream(webpackConfig, webpack))
        .on('error', function handleError() {
            this.emit('end'); // Recover from errors
        })
        .pipe(gulp.dest(cfg.dev_js))
});

//Build js for production
gulp.task('prod:js', function () {
    gulp.src(cfg.src_js + '/entry.js')
        .pipe(webpackStream(webpackProdConfig, webpack))
        .on('error', function handleError() {
            this.emit('end'); // Recover from errors
        })
        .pipe(minify({
            minify: true,
            minifyJS: {
                sourceMap: false
            }
        }))
        .pipe(gulp.dest(cfg.build_js));
});