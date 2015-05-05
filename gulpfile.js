var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var minifycss     = require('gulp-minify-css');
var filter        = require('gulp-filter');
var gutil         = require('gulp-util');
var reload        = browserSync.reload;

/* Globs
*/
var path = {
  html: './assets/**/*.html',
  sass: './assets/**/*.scss',
  img:  './assets/**/*.{jpg,gif}',
  dest: './dist',
};


/* Helper Method
*/
var out = function(folder) {
  if (folder) return gulp.dest(path.dest + '/' +folder);
  return gulp.dest(path.dest);
}

var onError = function(err) {
  gutil.log(err);
  this.emit('end');
}


 /* SCSS, CSS
 */
gulp.task('sass', function () {
  return gulp.src(path.sass)
    .pipe(sass({sourcemap: true}))
    .on('error', onError)
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(out())// Write the CSS & Source maps
    .pipe(filter('**/*.css')) // Filtering stream to only css files
    .pipe(reload({stream:true}));
});


// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});

/* Index.html
 */
gulp.task('html', function(){
  gulp.src(path.html).pipe(gulp.dest(path.dest)).pipe(reload({stream: true}));
});

/* Index.html
 */
gulp.task('img', function(){
  gulp.src(path.img).pipe(gulp.dest(path.dest)).pipe(reload({stream: true}));
});


 /* SCSS, CSS
 */
gulp.task('sass', function () {
  return gulp.src(path.sass)
    .pipe(sass({sourcemap: true}))
    .on('error', onError)
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(out())// Write the CSS & Source maps
    .pipe(filter('**/*.css')) // Filtering stream to only css files
    .pipe(reload({stream:true}));
});


/* Local Development -- Watch
*/
gulp.task('dev', ['sass', 'html', 'img'], function() {
  browserSync.init({ server: path.dest, open: false});
  gulp.watch(path.sass, ['sass']);
  gulp.watch(path.img, ['img']);
  gulp.watch(path.html, ['html']);
});

gulp.task('default', ['dev'])