'use strict';

angular.module('Player.player', ['ngRoute'])
    .config(['$routeProvidor', function($routeProvidor) {
	$routeProvidor
	    .when('/player', {
		templateUrl:'./player/player.html', controller:'PlayerCtrl'
	    })
    }])

    .controller('PlayerCtrl', ['$scope', '$location', function($scope, $location) {
	console.log("PLAYER!!!");
    }])
