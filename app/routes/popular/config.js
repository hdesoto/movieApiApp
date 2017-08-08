/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/popular', {
        templateUrl: 'app/routes/popular/template.html',
        controller: 'popularController',
        controllerAs: 'popCtrl'
      })
      })

