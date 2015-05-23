app = angular.module("myApp.fundController", ['myApp.RestService']);

app.controller('SearchController',['$scope','RestService', function($scope, RestService){

	endPoint = "https://community-angellist.p.mashape.com/startups?filter=raising";

	response = RestService.restCall(endPoint);
	response.query().$promise.then(function(d){
		$scope.names = d.startups;
		$scope.orderProp = 'name';
		console.log($scope.names);
	}, function(error){
		alert("some error occurred");
	});
}]);