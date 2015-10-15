
var audio = document.createElement('audio');

app.factory('PlayerFactory', function ($http, $rootScope) {

// FROM PLAYER FACTORY:
	// console.log($rootScope);
	// var album = $rootScope.album;
	// console.log(album);
	var songs;

	// $rootScope.$on('startIt', function (evt, data) {
	// 	$rootScope.start(data.song);

	// });

	// $scope.$on('songLoad', function (evt, song) {
	// 	$scope.currentSong = song;
	// });


// FROM ALBUM CONTROLLER:

	return {

		playing: false,
		currentSong: null,

		isPlaying: function(){
			return this.playing;
		},

		load: function (song) {
			audio.src = song.audioUrl;
			audio.load();
			this.currentSong = song;
			$rootScope.$broadcast('songLoad', song);
			this.progress = 0;
		},

		pause: function () {
			audio.pause();
			this.playing = false;
		},

		start: function (song, songList) {
			console.log("start clicked!")
			this.pause();
			songs = songList;
			this.load(song);
			this.play();
		},

		play: function () {
			console.log("factory play fn player!")
			console.log('this', this);
			console.log('audio', audio)
			audio.play();
			this.playing = true;
		},

		resume: function () {
			console.log("resume")
			this.play();
		},

		getCurrentSong: function(){
			return this.currentSong;
		},

		toggle: function () {
			if (this.isPlaying()) this.pause();
			else this.play();
		},

		moveTo: function (index) {
			index += songs.length
			index %= songs.length;
			this.start(songs[index]);
		},

		next: function () {
			var index = songs.indexOf(this.currentSong);
			this.moveTo(index + 1);
		},

		previous: function () {
			var index = songs.indexOf(this.currentSong);
			this.moveTo(index - 1);
		}
	}

});





