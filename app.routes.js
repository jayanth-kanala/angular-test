var appRoutes = angular.module('myApp.routes', ['ngRoute','myApp.fundController','myApp.homeController']);

appRoutes.config(['$routeProvider',
                 function($routeProvider) {
                 	$routeProvider.
                 	when('/fund', {
                 		templateUrl: 'fund-raising/fundraising-details.html',
                 		controller: 'SearchController'
                 	}).
                 	otherwise({
                 		redirectTo: 'home',
                 		templateUrl: 'home/welcome.html',
                 		controller: 'HomeController'
                 	});
                 }]);
