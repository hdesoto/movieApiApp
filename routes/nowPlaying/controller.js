myApp.controller('nowPlayingController', function($routeParams, DataService) {
    var self = this;
    console.log('now playing controller loading')

    self.picture;
    self.title;
    self.overview;
    self.releasedate;
    console.log('all self created')
    showNowPlaying()

    function showNowPlaying() {
        console.log('shownow')
        DataService.getNow(function(response) {
            self.nowPlayingArray = response;
            console.log(self.nowPlayingArray)
        })
    }

    /*
	self.showNowPlaying = function () {
		getInfoServices.getNowPlaying(response)
		  .then( this.nowPlaying = response);
	}
*/

})