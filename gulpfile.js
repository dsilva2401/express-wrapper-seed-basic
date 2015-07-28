var gulp  = require('gulp');
var shell = require('gulp-shell');


// Run services
gulp.task('run-services', shell.task([
  'node_modules/newman/bin/newman -c test/express-wrapper-seed.json'
]));

// Restart server
gulp.task('restart-server', shell.task([
  'rm data/database.sqlite',
  'node app.js'
]));