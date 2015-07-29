module.exports = function ($methods, $database, $q) {
	
	// Dependencies
	var $ = {};
	$.database = $database;
	$.q = $q;

	// Response
	$methods.Response = require('./Response')($);

	// Person
	$methods.Person = {};
	$methods.Person.Class = require('./Person.Class')($);
	$methods.Person.Instance = require('./Person.Instance')($);

	// Credential
	$methods.Credential = {};
	$methods.Credential.Class = require('./Credential.Class')($);

}