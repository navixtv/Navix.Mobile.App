angular.module('Navix', [
		'ui.router'
	])
	.config(function ($urlRouterProvider) {
			$urlRouterProvider
				.when('', '/accounts/login')
				.when('/login', '/accounts/login')
			;
		}
	)
	.controller("ApplicationController", function() {
		var c = 0;
		c++;
	})
;