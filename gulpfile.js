var gulp    = require('gulp');

var concat  = require('gulp-concat');
var del     = require('del');
var karma   = require('gulp-karma');
var nodemon = require('gulp-nodemon');
var shell   = require('gulp-shell');

var karmaTests    = 'client/src/**/*_spec.js';
var sourceScripts = ['client/src/**/*.js', '!' + karmaTests];
var vendorScripts = 'client/vendor/**/*.js';
var sourceMarkup  = 'client/src/**/*.html';


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
// Using `jasmine-node server` in terminal provides nicer colors.
gulp.task('jasmine-node', shell.task(['jasmine-node server']));

// run front-end unit tests
// TODO: Karma is not watching properly (exits on fail).
// For now, use `karma start` in terminal instead of `gulp karma`.
gulp.task('karma', function() {
  gulp.src('client/**/*.js')
    .pipe(karma({
      configFile: 'karma.conf.js'
    }));
});

// compile, watch for changes, and start server
gulp.task('default', ['compile', 'watch', 'server']);
