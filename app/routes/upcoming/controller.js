myApp.controller('upcomingController', function($routeParams, $location, DataService) {
    
    console.log('Upcoming Controller loading')
    var self = this;
    self.query = "";
    self.videosAvailable = false;
    showUpcoming()
    
    function showUpcoming() {
        console.log('showUpcoming')
        DataService.getUpcoming(function(response) {
            self.upcomingArray = response;
            console.log(self.upcomingArray)
            
        })
    }

     self.searchTrigger = function () {
        console.log('searh Triggered')
        console.log(self.query)
        $location.path('/search/' + self.query)
    }

    self.showVideos = function(id){
        DataService.getVideos(id,function(response){
            self.videoList = response;
        })
        if(self.videoList.length!=0){
            self.videosAvailable = true;
        }
        else{
            self.videosAvailable = false;
        }
    }
})