
app.controller('AlbumCtrl', function ($scope, $rootScope, AlbumFactory, PlayerFactory, StatsFactory) {
	// $scope.album = fakeAlbum;

	// $scope.start = PlayerFactory.start

	// $scope.start = function (s) {
	// 	$rootScope.$broadcast('startIt', {
	// 		song: s,
	// 		album: $scope.album
	// 	});
	// };

	// $scope.$on('songLoad', function (evt, song) {
	// 	$scope.currentSong = song;
	// });

	AlbumFactory.getAll()
		.then(function(album){
			$scope.album = album;
			return StatsFactory.totalTime($scope.album)
		})
		.then(function(albumDuration){
			albumDuration = Math.floor(albumDuration);
			$scope.fullDuration = albumDuration
		})



});





// var fakeAlbum = {
// 	name: 'Abbey Road',
// 	artists: [{name: 'Bill'}, {name: 'Bob'}],
// 	songs: [{
// 		name: 'Romeo & Juliette',
// 		artists: [{name: 'Bill'}],
// 		genres: ['Smooth', 'Funk'],
// 		audioUrl: 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2013.mp3'
// 	}, {
// 		name: 'White Rabbit',
// 		artists: [{name: 'Bill'}, {name: 'Bob'}],
// 		genres: ['Fantasy', 'Sci-fi'],
// 		audioUrl: 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2008.mp3'
// 	}, {
// 		name: 'Lucy in the Sky with Diamonds',
// 		artists: [{name: 'Bob'}],
// 		genres: ['Space'],
// 		audioUrl: 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2001.mp3'
// 	}],
// 	imageUrl: 'http://fillmurray.com/300/300'
// };


