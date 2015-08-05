module.exports = function ($) {
	var r = {};
	var TimeRequestLog = $.database.main.models.TimeRequestLog;

	r.pre = function ( req, res, next ) {
		req.timeBeforeProcess = Date.now();
		next();
	}

	r.post = function ( req, res, next ) {
		// Saving request time log
		var reqData = {};
		reqData.url = req.originalUrl;
		reqData.method = req.method;
		reqData.ip = req.ip;
		reqData.PersonId = req.cookies.uid || null;
		reqData.duration = Date.now()-req.timeBeforeProcess;
		TimeRequestLog.create( reqData );
		res.end();
	}

	return r;
}