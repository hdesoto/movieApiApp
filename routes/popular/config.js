/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/popular', {
        templateUrl: '//routes/popular/template.html',
        controller: 'popularController',
        controllerAs: 'popCtrl'
      })
      })

