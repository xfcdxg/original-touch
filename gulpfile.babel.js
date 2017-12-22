import gulp   from 'gulp'
import pump   from 'pump'
import uglify from 'gulp-uglify'
import babel  from 'gulp-babel'
import rename from 'gulp-rename'

import browserify from 'browserify'
import babelify   from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'

const src  = gulp.src('src/**/*')
const common = gulp.dest('common')
const dist = gulp.dest('dist')

gulp.task('default', ['build'])

gulp.task('build', () =>
  pump([
    src,
    babel(),
    // uglify(),
    common,
  ])
)

gulp.task('min', () => {
  pump([
    browserify('./src/index.js')
    .transform('babelify')
    .bundle(),
    source('touch.min.js'),
    buffer(),
    uglify(),
    dist
  ])
})
