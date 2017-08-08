/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/topRated', {
        templateUrl: 'app/routes/topRated/template.html',
        controller: 'topRatedController',
        controllerAs: 'topCtrl'
      })
      })

