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

	self.getPopular = function(callback){
		console.log('getPopular Called!')
		var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + v3Token + '&page=1'
		$http.get(url)
		  .then(function(response){
		  		callback(response.data.results)
		  })
	}

	self.getTopRated = function (callback){
		console.log('get Top Rated Called')
		var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + v3Token + '&page=1'
		$http.get(url)
		  .then(function(response){
		  		callback(response.data.results)
		  })
	}

	self.getSearch = function (query, callback){
		console.log('get Search called!!')
		self.searchedValue = query;
		var url = 'https://api.themoviedb.org/3/search/movie?api_key=' + v3Token + '&query=' + self.searchedValue  + '&page=1'
		$http.get(url)
		  .then(function(response){
		  		callback(response.data.results)
		  })
	}

	self.getVideos = function (videoId, callback){
		console.log('Getting videos')
		self.vidId = videoId;
		var url = 'https://api.themoviedb.org/3/movie/' + videoId + '/videos?api_key=' + v3Token
		$http.get(url)
		  .then(function(response){
		  		callback(response.data.results)
		  })
	}

	self.getUpcoming = function(callback){
		console.log('get Upcoming called!!')
		var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + v3Token
		$http.get(url)
		  .then(function(response){
		  		callback(response.data.results)
		  })
	}

});
