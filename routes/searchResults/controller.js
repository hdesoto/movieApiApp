myApp.controller('searchController', function($routeParams, $location, DataService) {

    console.log('search controller loading')
    var self = this;
    self.query = $routeParams.query
    self.videoId;
    self.videosAvailable;
    showSearchResults()

    function showSearchResults() {
        console.log('show Search')
        DataService.getSearch(self.query, function(response) {
            self.searchResultArray = response;
            console.log(self.searchResultArray)
        })
    }

    self.searchTrigger = function() {
        console.log('searh Triggered')
        console.log(self.query)
        $location.path('/search/' + self.query)
    }

    self.videoAvailable = function(id) {
        console.log('Calling videos from Controller')
        DataService.getVideos(id, function(response) {
            self.videoList = response;
        })

        if (self.videoList.length === 0) {
            self.videosAvailable = false;
        } else {
            self.videosAvailable = true;
        }
    }

})