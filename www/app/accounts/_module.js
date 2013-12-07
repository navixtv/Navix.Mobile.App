angular.module('Navix')
	.config(function ($stateProvider) {
		$stateProvider
			.state('accounts', {
				abstract: true,
				url: '/accounts',
				template: '<div ui-view></div>'
			})
		;
	})
;