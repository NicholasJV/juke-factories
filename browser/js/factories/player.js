
var audio = document.createElement('audio');

app.factory('PlayerFactory', function ($http, $rootScope) {

// FROM PLAYER FACTORY:
	var songs;
	// $rootScope.$on('startIt', function (evt, data) {
	// 	$rootScope.start(data.song);

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

		start: function (song) {
			this.pause();
			this.load(song);
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





