myApp.controller('searchBoxController', function($routeParams, $location, DataService) {
    
    var self = this;
    self.searchedText;

    self.searchMovie = function(){
    	$location.path('/search/' + self.searchedText)
    }
    