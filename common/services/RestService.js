app = angular.module("myApp.RestService", ['ngResource']);

app.factory('RestService', ['$resource', function($resource){

	var headers = {
		'X-Mashape-Key': 'hH2oIpIfyVmshDl73PPD7lCdAoyUp1p3VucjsngeWOMi6oPdi6',
		'Accept': 'application/json',
	};

	return {
		restCall : function (url){
			return $resource(url, {}, {query:{isArray : false, headers : headers}});
		}
	}
}]);