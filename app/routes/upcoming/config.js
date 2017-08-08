/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/upcoming', {
        templateUrl: 'app/routes/upcoming/template.html',
        controller: 'upcomingController',
        controllerAs: 'upCtrl'
      })
      })

