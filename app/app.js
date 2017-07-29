angular.module('Player', [
    'ngRoute',
    'Player.player'
])

    .config(['$routeProvidor', function($routeProvidor){
	$routeProvidor
	    .otherwise({redirectTo:'/player'})
    }])
