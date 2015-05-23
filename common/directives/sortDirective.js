sortDirective = angular.module("myApp.sortDirective", []);

sortDirective.directive("sortPanel" , function () {
	return {
		restrict : 'E',
		templateUrl : 'common/views/sort-panel.html',
	}
});