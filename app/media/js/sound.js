function Sound() {
	//gamesound wird hier geladen
	var audio = new Audio('media/Gamesound64kbs.mp3');
	var waveshot = new Audio('media/waveexplosion3.wav'); //evtl in mp3 konvertieren

	function playGameSong() {
		audio.play();
	}
	function waveShot(){
		waveshot.play();
	}
	return{
		playGameSong: playGameSong,
		waveShot : waveShot
	}
}