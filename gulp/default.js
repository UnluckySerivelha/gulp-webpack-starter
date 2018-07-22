const gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('default', gulpSequence('dev:clean-images', ['dev:js', 'dev:scss', 'dev:jade', 'dev:font', 'dev:images'], 'dev:server'));