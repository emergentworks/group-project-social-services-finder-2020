const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const argv = require('yargs').argv
const isProduction = argv.production

gulp.task('server', () => {
  browserSync.init({ server: '.', open: !isProduction});
})

gulp.task('watch', function() {
  return gulp.watch('*.(html|css|js)', (done) => {
      browserSync.reload();
      done();
    })
});

gulp.task('dev', gulp.series([
  'server',
  'watch',
]));
