myApp.controller('popularController', function($routeParams, $location, DataService) {
    
    console.log('popular controller loading')
    var self = this;
    self.query = "";
    showPopular()

    function showPopular() {
        console.log('showPopular')
        DataService.getPopular(function(response) {
            self.popularArray = response;
            console.log(self.popularArray)
        })
    }

     self.searchTrigger = function () {
        console.log('searh Triggered')
        console.log(self.query)
        $location.path('/search/' + self.query)

    }

})