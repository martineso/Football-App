function TeamCtrl($scope, $routeParams, $http, $window) {
	this.teamId = $routeParams.teamId;

	$scope.loading = true;
	$http.get(`/teams/${this.teamId}`, { cache: true })
		.then(function (response) {
			console.log(response)
			$scope.team = response.data;
		}, function (err) {
			console.log(err);
		}).finally(function () {
			$scope.loading = false;
		});
}

angular.module('FootballApp')
	.controller('TeamCtrl', TeamCtrl);