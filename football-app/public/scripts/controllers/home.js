(function(angular, mapFixtures, formatDate) {
    function HomeCtrl ($scope, $http) {

        $scope.formatDate = formatDate;
    
        $scope.loading = true;
        $http.get('/fixtures')
            .then(function(response) {
                console.log(response)
                var data = response.data;
                $scope.fixtures = mapFixtures(data.fixtures);
                $scope.fixtures.timeFrameStart = data.timeFrameStart;
                $scope.fixtures.timeFrameEnd = data.timeFrameEnd;
    
            }, function(err) {
                console.log(err);
            }).finally(function() {
                $scope.loading = false;
            });
    }
    
    angular.module('FootballApp')
      .controller('HomeCtrl', HomeCtrl);
    
})(angular, mapFixtures, formatDate);