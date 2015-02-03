var child_process = require('child_process')
  , util = require('gulp-util')
module.exports = (function () {
	var service = undefined
  return {
		run: function (file, options) {
			if (service) {
				service.kill('SIGKILL')
        service = undefined
			}
      service = child_process.spawn('node', [file], options || {})
      service.stdout.setEncoding('utf8')
      service.stdout.on('data', function (data) {
        util.log('[' + util.colors.green(file) + ']', util.colors.yellow('stdout: ' + data.toString()))
			})
      service.stderr.on('data', function (data) {
        util.log('[' + util.colors.green(file) + ']', util.colors.red('stderr: ' + data.toString()))
			})
      service.on('exit', function (code, sig) {
        util.log('[' + util.colors.green(file) + '] service exit -', sig)
			})
      process.on('exit', function (code, sig) {
				util.log('[' + util.colors.green(file) +'] gulp exit -', sig)
				service.kill()
			})
		}
	}
})()
