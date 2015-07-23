module.exports = function ($methods, $database) {
	
	// Dependencies
	var $ = {};
	$.database = $database;

	// Person
	$methods.Person = {};
	$methods.Person.Class = require('./Person.Class')($);
	$methods.Person.Instance = require('./Person.Instance')($);

}