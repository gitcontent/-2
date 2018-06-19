var gulp = require('gulp');
var server = require('gulp-webserver');
var uglify = require('gulp-uglify'); // 压缩js
var sass = require('gulp-sass'); // 编译sass

var fs = require('fs')
var path = require('path')
var url = require('url')
    //编译sass
gulp.task('sass', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
});
//监听sass
gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['sass'])
})
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                console.log(req.url)
                if (pathname === '/favicon.ico') {
                    return false;
                }
                pathname = pathname === '/' ? 'index.html' : pathname;
                if (pathname === '/api/') {
                    res.end();
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
});
//工作区
gulp.task('work', ['sass', 'watch', 'server'])