/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/', {
        templateUrl: 'app/routes/nowPlaying/template.html',
        controller: 'nowPlayingController',
        controllerAs: 'nowCtrl'
      })
      })

