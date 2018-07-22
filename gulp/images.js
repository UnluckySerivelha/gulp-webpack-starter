const gulp = require('gulp'),
    cfg = require('../package.json').config,
    clean = require('gulp-clean'),
    newer = require('gulp-newer');
const plugins = require('gulp-load-plugins')();
const imageminJR = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');


gulp.task('dev:images', function () {
    return gulp.src(cfg.src_img + '/**/*')
        .pipe(newer(cfg.dev_img))
        .pipe(gulp.dest(cfg.dev_img));
});

gulp.task('prod:images', function () {
    return gulp.src(cfg.src_img + '/**/*')
        .pipe(gulp.dest(cfg.build_img));
});

gulp.task('dev:clean-images',function () {
    return gulp.src(cfg.dev_img + '/*')
        .pipe(clean());
});

gulp.task('prod:minimize-images', () =>
gulp
    .src(cfg.src_img + '/**/*')
    .pipe(
        plugins.cache(
            plugins.imagemin(
                [
                    plugins.imagemin.gifsicle({ interlaced: true }),
                    plugins.imagemin.jpegtran({ progressive: true }),
                    imageminJR({
                        loops: 5,
                        min: 65,
                        max: 70,
                        quality: 'medium'
                    }),
                    plugins.imagemin.svgo(),
                    plugins.imagemin.optipng({ optimizationLevel: 3 }),
                    pngquant({ quality: '65-70', speed: 5 })
                ],
                {
                    verbose: true
                }
            )
        )
    )
    .pipe(gulp.dest(cfg.build_img))
);