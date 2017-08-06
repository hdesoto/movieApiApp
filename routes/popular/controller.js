myApp.controller('popularController', function($routeParams, DataService) {
    var self = this;
    console.log('popular controller loading')

    self.picture;
    self.title;
    self.overview;
    self.releasedate;
    console.log('all Popular self created')
    showPopular()

    function showPopular() {
        console.log('showPopular')
        DataService.getPopular(function(response) {
            self.popularArray = response;
            console.log(self.popularArray)
        })
    }

    /*
	self.showNowPlaying = function () {
		getInfoServices.getNowPlaying(response)
		  .then( this.nowPlaying = response);
	}
*/

})