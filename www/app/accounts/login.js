angular.module('Navix')
	.config(function ($stateProvider) {
		$stateProvider
			.state('accounts.login', {
				url: '/login',
				controller: "AccountLoginController",
				templateUrl: "app/accounts/login.tpl.html"
			})
		;
	})
	.controller("AccountLoginController", function() {
		var v = 1;
		v++;
	})
;