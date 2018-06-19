var gulp = require('gulp');
var server = require('gulp-webserver');
var uglify = require('gulp-uglify'); // 压缩js
var sass = require('gulp-sass'); // 编译sass
var json = require('./src/data/data.json') // 引入数据

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
    gulp.src('lib')
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }
                pathname = pathname === '/' ? 'index.html' : pathname;
                if (pathname === '/api/getjson') {
                    res.end(JSON.stringify(json));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
});
//工作区
gulp.task('work', ['sass', 'watch', 'server']);
//打包css
gulp.task('libcss', function() {
    gulp.src('src/**/*.css')
        .pipe(gulp.dest('lib'))
});
//打包js
gulp.task('uglify', function() {
    gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('lib'))
});
//打包html
gulp.task('html', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('lib'))
})