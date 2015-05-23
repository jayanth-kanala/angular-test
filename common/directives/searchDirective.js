searchDirective = angular.module("myApp.searchDirective", []);

searchDirective.directive("searchPanel" , function () {
	return {
		restrict : 'E',
		templateUrl : 'common/views/search-panel.html',
	}
});