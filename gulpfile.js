var gulp    = require('gulp');

var concat  = require('gulp-concat');
var del     = require('del');
var karma   = require('gulp-karma');
var nodemon = require('gulp-nodemon');
var shell   = require('gulp-shell');

var sourceScripts = [
  'client/src/**/*.js',
  '!**/*_spec.js'
];

var vendorScripts = [
  'client/vendor/**/*.js'
];

var sourceMarkup = [
  'client/src/**/*.html'
];


gulp.task('clean', function (cb) {
  del('public/**/*', cb);
});

gulp.task('compile:src-scripts', function() {
  gulp.src(sourceScripts)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('compile:vendor-scripts', function() {
  gulp.src(vendorScripts)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('compile:markup', function() {
  gulp.src(sourceMarkup)
    .pipe(gulp.dest('public'));
});

gulp.task('compile', ['compile:src-scripts', 'compile:vendor-scripts', 'compile:markup']);

gulp.task('server', function() {
  nodemon({ script: 'server/server.js' }).on('restart', function(){
    console.log('Server restarted.');
  });
});

gulp.task('watch', function() {
  console.log('Watching...');
  gulp.watch(sourceScripts, ['compile:src-scripts']);
  gulp.watch(vendorScripts, ['compile:vendor-scripts']);
  gulp.watch(sourceMarkup, ['compile:markup']);
});

// run back-end unit tests
gulp.task('jasmine-node', shell.task(['jasmine-node server']));

// run front-end unit tests
gulp.task('karma', function() {
  gulp.src(vendorScripts.concat(sourceScripts))
    .pipe(karma({
      configFile: 'karma.conf.js'
    }));
});

// compile, watch for changes, start server, and run karma tests
gulp.task('default', ['compile', 'watch', 'server', /*'karma'*/]);
