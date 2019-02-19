var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');

gulp.task('devSass', function() {
    return gulp.src('./src/scss/*scss')
        .pipe(sass())
        .pipe(clean())
        .pipe(gulp.dest('./src/css/'))
});
gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('devSass'))

})