function TeamCtrl ($scope, $routeParams) {
    this.teamId = $routeParams.teamId;

    
}

angular.module('FootballApp')
  .controller('TeamCtrl', TeamCtrl);