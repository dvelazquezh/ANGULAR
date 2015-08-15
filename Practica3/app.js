angular.module('navigation', ['ngroute'])
.config(function($stateProvider, $routeProvider) {
	$stateProvider

	.state('home',{
		url:'/',
		templateUrl: 'views/home.html',
		//controller: 'HomeController'
		})

		.state('about',{
		url:'/',
		templateUrl: 'views/about.html',
		//controller: 'aboutController'
		});


  $routeProvider.otherwise({redirectTo: '/'});
});