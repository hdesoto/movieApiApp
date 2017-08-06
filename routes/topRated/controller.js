myApp.controller('topRatedController', function($routeParams, DataService) {
    var self = this;
    console.log('Top Rated controller loading')

    self.picture;
    self.title;
    self.overview;
    self.releasedate;
    console.log('all Top Rated self created')
    showTopRated()

    function showTopRated() {
        console.log('showTopRated')
        DataService.getTopRated(function(response) {
            self.topRatedArray = response;
            console.log(self.topRatedArray)
        })
    }

    /*
	self.showNowPlaying = function () {
		getInfoServices.getNowPlaying(response)
		  .then( this.nowPlaying = response);
	}
*/

})