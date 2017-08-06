/* global angular */

angular.module('MoviesApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/search/:query', {
        templateUrl: 'routes/searchResults/template.html',
        controller: 'searchController',
        controllerAs: 'searchCtrl'
      })
      })

