/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/', {
        templateUrl: 'routes/nowPlaying/template.html',
        controller: 'nowPlayingController',
        controllerAs: 'nowCtrl'
      })
      })

