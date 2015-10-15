app.controller('PlayerCtrl', function ($scope, $rootScope, PlayerFactory) {

	// var audio = document.createElement('audio');
	// $scope.isPlaying = undefined;
	
	// var songs;
	// $rootScope.$on('startIt', function (evt, data) {
	// 	$rootScope.start(data.song);
	// 	songs = data.album.songs;
	// });

	var songs = PlayerFactory.songs

	$scope.isPlaying = PlayerFactory.isPlaying;
	$scope.load = PlayerFactory.load;
	$scope.pause = PlayerFactory.pause;
	$scope.play = PlayerFactory.play;
	$scope.start = PlayerFactory.start;

	$scope.currentSong = PlayerFactory.currentSong;
	console.log('s.currentSong:', $scope.currentSong);

	$scope.toggle = PlayerFactory.toggle;
	$scope.moveTo = PlayerFactory.moveTo;
	$scope.forward = PlayerFactory.forward;
	$scope.back = PlayerFactory.back;


	audio.addEventListener('timeupdate', function () {
		$scope.progress = 100 * audio.currentTime / audio.duration;
		$scope.$digest();
	});

	audio.addEventListener('ended', function () {
		$scope.forward();
		$rootScope.$digest();
	});

});















// $scope.load = function (song) {
	// 	audio.src = song.audioUrl;
	// 	audio.load();
	// 	$scope.currentSong = song;
	// 	$rootScope.$broadcast('songLoad', song);
	// 	$scope.progress = 0;
	// };

	// $scope.pause = function () {
	// 	audio.pause();
	// 	$scope.isPlaying = false;
	// };

	// $scope.play = function () {
	// 	audio.play();
	// 	$scope.isPlaying = true;
	// };


	// $scope.start = function (song) {
	// 	$scope.pause();
	// 	$scope.load(song);
	// 	$scope.play();
	// };

	// $scope.toggle = function () {
	// 	if ($scope.isPlaying) $scope.pause();
	// 	else $scope.play();
	// };

	// $scope.moveTo = function (index) {
	// 	index += songs.length
	// 	index %= songs.length;
	// 	$scope.start(songs[index]);
	// };

	// $scope.forward = function () {
	// 	var index = songs.indexOf($scope.currentSong);
	// 	$scope.moveTo(index + 1);
	// };

	// $scope.back = function () {
	// 	var index = songs.indexOf($scope.currentSong);
	// 	$scope.moveTo(index - 1);
	// };












