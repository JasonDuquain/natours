var gulp = require('gulp');
var sass = require('gulp-sass'); 
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('styles', function() {
    return gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
    }))
        .pipe(sass({
            outputStyle: 'expanded'

    }).on('error', sass.logError))       
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});


gulp.task('watch', ['styles'], function () {
    gulp.watch('scss/**/*.scss', ['styles']);
});


gulp.task('default', ['watch']);



