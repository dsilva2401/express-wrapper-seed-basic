module.exports = function (app) {

	app.addRoute(function () {
		return {
			url: '/',
			method: 'GET',
			callback: function (req, res) {
				res.end(':D');
			}
		}
	});

}