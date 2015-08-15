angular.module('jsoop.controllers', [])

.controller('HomeController', ['$scope', function($scope) {
	var hello = function(message){
		console.log(message);
	};

	$scope.model = {
		name: 'Fulano',
		phone: 12332442,
		active: true,
		print: function() {
			console.log('Hola Mundo');
		},
		say: hello
	};
}])

.controller('AboutController',['$scope', function($scope) {

}]);