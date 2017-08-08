/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/nowPlaying', {
        templateUrl: 'app/routes/nowPlaying/template.html',
        controller: 'nowPlayingController',
        controllerAs: 'nowCtrl'
      })
      })

