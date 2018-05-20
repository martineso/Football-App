angular.module('FootballApp', ['ngRoute', 'ngMessages'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/team/:teamId', {
      templateUrl: 'views/team.html',
      controller: 'TeamCtrl'
    })
    .otherwise('/');
  })
  