const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    cfg = require('../package.json').config;

gulp.task('dev:server', function () {
    browserSync.init({
        server: "./dev",
        files: ['dev/**/*'],
    });
    gulp.watch(cfg.src_jade + '/**/*.jade', ['dev:jade']);
    gulp.watch(cfg.src_js + '/**/*.js', ['dev:js']);
    gulp.watch(cfg.src_scss + '/**/*.scss', ['dev:scss']);
    gulp.watch(cfg.src_font + '/**/*', ['dev:font']);
    gulp.watch(cfg.src_img + '/**/*', ['dev:images']);
});