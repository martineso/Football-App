(function(angular, mapFixtures, formatDate){
	function TeamCtrl($scope, $routeParams, $http, $window) {
		this.teamId = $routeParams.teamId;
		$scope.formatDate = formatDate;
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
	
		$scope.playersLoading = true;
		$http.get(`/teams/${this.teamId}/players`, { cache: true })
			.then(function (response) {
				console.log(response)
				$scope.players = response.data.players;
				$scope.playersCount = response.data.count;
			}, function (err) {
				console.log(err);
			}).finally(function () {
				$scope.playersLoading = false;
			});
	
		$scope.fixturesLoading = true;
		$http.get(`/teams/${this.teamId}/fixtures`, { cache: true })
			.then(function (response) {
				console.log(response)
				$scope.fixtures = mapFixtures(response.data.fixtures);
				$scope.fixturesCount = response.data.count;
				$scope.fixturesSeason = response.data.season;
			}, function (err) {
				console.log(err);
			}).finally(function () {
				$scope.fixturesLoading = false;
			});
	}
	
	angular.module('FootballApp')
		.controller('TeamCtrl', TeamCtrl);
})(angular, mapFixtures, formatDate);