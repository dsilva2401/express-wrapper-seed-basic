var gulp  = require('gulp');
var shell = require('gulp-shell');
var nodemon = require('gulp-nodemon');

// Run services
gulp.task('run-services', shell.task([
  'node_modules/newman/bin/newman -c test/express-wrapper-seed.json'
]));

// Restart server
gulp.task('restart-server', shell.task([
  'rm data/database.sqlite',
  'node app.js'
]));

// Start server with daemon
gulp.task('start', function () {
	nodemon({
		script: 'app.js',
		ext: 'js html',
		env: { 'NODE_ENV': 'dev' }
	});
})