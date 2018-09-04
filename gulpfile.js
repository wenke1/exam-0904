let gulp = require("gulp");
let sass = require("gulp-sass");
let devCss = require("gulp-clean-css");

//编译sass压缩css
gulp.task("sass", () => {
    return gulp.src("./src/sass/*.scss")
        .pipe(sass())
        .pipe(devCss())
        .pipe(gulp.dest("./src/css"));
});