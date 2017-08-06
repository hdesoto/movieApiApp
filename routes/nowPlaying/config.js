/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/nowPlaying', {
        templateUrl: '/routes/nowPlaying/template.html',
        controller: 'nowPlayingController',
        controllerAs: 'nowCtrl'
      })
      })

