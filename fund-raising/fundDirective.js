fundDir = angular.module("myApp.fundDirective", []);
fundDir.directive("fundraisingPanel" , function () {
	return {
		restrict : 'E',
		templateUrl : 'fund-raising/fundraising-panel.html',
	}
});