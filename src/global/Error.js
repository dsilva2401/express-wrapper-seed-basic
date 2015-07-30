module.exports = function ($) {
	return function (err) {
		var m = {};
		var fError = {};
		fError.ewError = true;
		fError.error = err || {};

		// Missing parameters
		m.missingParameters = function (parameters) {
			fError.details = {
				en: 'Missing parameters: ' + parameters.join(', '),
				es: 'Parametros faltantes: ' + parameters.join(', ')
			}
			return fError;
		}

		// Email already registered
		m.emailAlreadyRegistered = function () {
			fError.details = {
				en: 'Email already registered',
				es: 'Email registrado anteriormente'
			}
			return fError;
		}


		return m;
	}
}