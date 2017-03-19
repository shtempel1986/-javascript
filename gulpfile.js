/**
 * Created by Павел on 19.03.2017.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");
var browserSync = require('browser-sync');

gulp.task("babel", function () {
    return gulp.src("default/src/main.js")
        .pipe(babel())
        .pipe(gulp.dest("default/dist"));
});

gulp.task('watch',['babel'], function () {
    return gulp.watch('default/src/main.js', ['babel', browserSync.reload])
});

gulp.task('default', ['watch']);
