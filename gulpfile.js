let gulp = require("gulp");
let sass = require("gulp-sass");
let devCss = require("gulp-clean-css");
let uglify = require("gulp-uglify");

//编译sass压缩css
gulp.task("sass", () => {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(devCss())
        .pipe(gulp.dest("./src/css"));
});

//压缩js
gulp.task("minJs", () => {
    return gulp.src("./src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./src/common"));
});

//监听
gulp.task("watch", () => {
    return gulp.watch("./src/scss/*.scss", gulp.series("sass"))
        //   .gulp.watch("./src/js/*.js", gulp.series("minJs"));
});

//开启事件
gulp.task("dev", gulp.series("sass", "minJs", "watch"));