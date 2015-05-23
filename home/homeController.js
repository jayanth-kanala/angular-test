app = angular.module("myApp.homeController", ['myApp.RestService']);

app.controller('HomeController',['$scope','RestService', function($scope, RestService){

	endPoint = "https://community-angellist.p.mashape.com/feed";

	response = RestService.restCall(endPoint);
	response.query().$promise.then(function(d){
		// console.log(d);
		$scope.names = d.feed;
		$scope.orderProp = 'name';
		console.log($scope.names);
	}, function(error){
		alert("some error occurred");
	});
}]);