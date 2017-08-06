/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/topRated', {
        templateUrl: '/routes/topRated/template.html',
        controller: 'topRatedController',
        controllerAs: 'topCtrl'
      })
      })

