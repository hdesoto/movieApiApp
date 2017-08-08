myApp.controller('topRatedController', function($routeParams, $location, DataService) {
    
    console.log('Top Rated controller loading')
    var self = this;
    self.query = "";
    showTopRated()
    
    function showTopRated() {
        console.log('showTopRated')
        DataService.getTopRated(function(response) {
            self.topRatedArray = response;
            console.log(self.topRatedArray)
            
        })
    }

     self.searchTrigger = function () {
        console.log('searh Triggered')
        console.log(self.query)
        $location.path('/search/' + self.query)

    }
})