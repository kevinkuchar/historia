// var gulp       = require("gulp");
// var browserify = require("browserify");
// var source     = require('vinyl-source-stream');
// var watchify   = require("watchify");
// var tsify      = require("tsify");
// var gutil      = require("gulp-util");

// var config = {
//     entry: 'src/app.ts',
//     bundleFile: 'bundle.js',
//     bundleDest: 'dist'
// };

// var watchedBrowserify = watchify(browserify({
//     basedir: '.',
//     debug: true,
//     entries: [config.entry],
//     cache: {},
//     packageCache: {}
// }).plugin(tsify));

// function bundle() {
//     return watchedBrowserify
//         .bundle()
//         .pipe(source(config.bundleFile))
//         .pipe(gulp.dest(config.bundleDest));
// }

// gulp.task("default", bundle);
// watchedBrowserify.on("update", bundle);
// watchedBrowserify.on("log", gutil.log);