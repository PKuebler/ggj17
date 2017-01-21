function Sound() {
	//gamesound wird hier geladen
	var audio = new Audio('media/Gamesound64kbs.mp3');

	function playGameSong() {
		audio.play();
	}
	return{
		playGameSong: playGameSong
	}
}