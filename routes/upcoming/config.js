/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/upcoming', {
        templateUrl: 'routes/upcoming/template.html',
        controller: 'upcomingController',
        controllerAs: 'upCtrl'
      })
      })

