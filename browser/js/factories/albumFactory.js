//albumFactory.js


app.factory('AlbumFactory', function ($http) {

	var albumsObj = {};

	albumsObj.getAll = function(){
		return $http.get('/api/albums/561e99c3300e0d6725faae28')
			.then(function (response) {
				var album = response.data;
				// console.log("songs inside then", songs)

				album.imageUrl = '/api/albums/' + album._id + '.image';

				var albumArtists = _.indexBy(album.artists, '_id');

				album.songs.forEach(function (s) {
					s.audioUrl = '/api/songs/' + s._id + '.audio';
					s.artists = s.artists.map(function (artistId) {
						return albumArtists[artistId];
					});
				});
				return album;
			})
	}

	return albumsObj;
})

