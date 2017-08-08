/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider,$location) {
        $routeProvider
      .when('/', {
        templateUrl: 'routes/nowPlaying/template.html',
        controller: 'nowPlayingController',
        controllerAs: 'nowCtrl'
      })
      })

