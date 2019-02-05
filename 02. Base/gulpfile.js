var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var config = {
    path: {
        scss: './src/scss/**/*.scss',
        html: './dist/index.html'
    },
    output: {
        cssName: 'bundle.min.css',
        path: './dist'
    }
};

gulp.task('scss', function() {
    return gulp.src(config.path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: config.output.path
        }
    });

    gulp.watch(config.path.scss, ["scss"]);
    gulp.watch(config.path.html).on('change', browserSync.reload);

});

gulp.task('default', ['scss', 'serve']);
