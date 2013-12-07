var player;
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
	.controller("AccountLoginController", function($scope) {
		var playerConfig = {
			startTime: 0
		};
		videojs("videoPlayer", {}, function () {
			player = this;
			$scope.player = this;
			this.on("loadedmetadata", function () {
				$scope.player.currentTime(playerConfig.startTime);
				if (playerConfig.autoPlay) {
					$scope.player.play();
					// It appears that this will not work unless it is called in response
					// to a user action.
					// $scope.player.requestFullScreen();
				}
			});
			this.on("play", function () {
//				updateServer();
			});
			this.on("pause", function () {
//				stopServerUpdate();
			});
			this.on("ended", function () {
				// It appears that this will not work unless it is called in response
				// to a user action.
				// $scope.player.cancelFullScreen();

				//				$scope.player.cancelFullScreen();
				// This is a trick to get the video player out of full screen mode because
				// FF does not change full screen mode unless there is a user interaction
				var video = $scope.player.el_;
				var parentNode = video.parentNode;
				parentNode.removeChild(video);
				parentNode.appendChild(video);
				//				stopServerUpdate();
			});

			this.addSeconds = function (seconds) {
				$scope.player.currentTime($scope.player.currentTime() + seconds);
			};

			var controls = $("<div class='navix-player-controls'></div>");
			controls.append("<button onclick='player.addSeconds(-30)'>-30</button>");
			controls.append("<button onclick='player.addSeconds(-15)'>-15</button>");
			controls.append("<button onclick='player.addSeconds(15)'>15</button>");
			controls.append("<button onclick='player.addSeconds(30)'>30</button>");
			controls.append("<button onclick='player.addSeconds(60)'>60</button>");
			$('.vjs-control-bar').append(controls);
		});
	})
;