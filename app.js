(function() {

	var app = angular.module('myApp', ['myApp.routes','customFilters','myApp.fundDirective','myApp.searchDirective','myApp.sortDirective']);

	// custom filter
	angular.module('customFilters', []).filter('checkmark', function() {
		return function(input) {
			return input ? '\u2713' : '\u2718';
		};
	});
})();
