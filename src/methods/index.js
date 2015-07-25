module.exports = function ($methods, $database, $q) {
	
	// Dependencies
	var $ = {};
	$.database = $database;
	$.q = $q;

	// Person
	$methods.Person = {};
	$methods.Person.Class = require('./Person.Class')($);
	$methods.Person.Instance = require('./Person.Instance')($);

}