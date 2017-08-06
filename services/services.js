/* global myApp */

myApp.service('DataService', function ($http) {
	var self = this;

	var v3Token = 'f7a8e53c97d4e87784159206201f72f2'
	var v4Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2E4ZTUzYzk3ZDRlODc3ODQxNTkyMDYyMDFmNzJmMiIsInN1YiI6IjU5N2QyOTM3OTI1MTQxNWQ1ZDAwYTMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VHKTgFJ3YUFCvHjU-9IgAEtGWkoiPz0PjMnNzw3RCy4'

	self.getNow = function (callback){
		console.log('getNow called')
		var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + v3Token + '&page=1'
		$http.get(url)
		  .then(function(response){
				callback(response.data.results)
			})
	}

});
