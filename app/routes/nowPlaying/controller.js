myApp.controller('nowPlayingController', function($routeParams, $location, DataService) {
    
    console.log('now playing controller loading')
    var self = this;
    self.query = "";
    showNowPlaying()

    function showNowPlaying() {
        console.log('shownow')
        DataService.getNow(function(response) {
            self.nowPlayingArray = response;
            console.log(self.nowPlayingArray)
        })
    }

    self.searchTrigger = function () {
        console.log('searh Triggered')
        console.log(self.query)
        $location.path('/search/' + self.query)

    }

})