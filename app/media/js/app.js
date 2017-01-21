var colorset = null;
var surfaces = null;
var waves = null;
var renderer = null;
var waveRenderer = null;
var playerController = null;
var isRun = false;
var newGameTimer = null;
var score = {
	player1 : 0,
	player2 : 0
	};

function startNewGame() {
	isRun = false;
	// Init
	colorset = ColorSets().randomColorSet();

	surfaces = Surfaces(MAP_SIZE.x, MAP_SIZE.y, colorset);
	waves = WaveController(surfaces);
	//var waves = WaveSurfaces(surfaces);

	// Renderer
	renderer = RenderTiles("background",colorset);
	waveRenderer = RenderTiles("waves",colorset);

	// PlayerController
	playerController = PlayerController("player", waves,surfaces,colorset);
	playerController.spawnPlayer();
	playerController.spawnPlayer();

	isRun = true;
}

// loop
function loop() {
	if (isRun) {
		playerController.update();

		renderer.drawTiles(surfaces.GetSurfaces());
		waveRenderer.drawWaves(surfaces.GetSurfaces());
		waves.UpdateWave();

		if (playerController.isEnd() && newGameTimer == null) {			
			newGameTimer = setTimeout(function() {
				newGameTimer = null;
				if(playerController.score.player1 == 1){
					score.player1++;
					console.log("p1");
				}else{
					score.player2++;
					console.log("p2");
				}
				console.log(score);
				startNewGame();
			}, TIME_BETWEEN_ROUNDS);
		}
	}
	window.requestAnimFrame(loop);

}

// start loop
loop();
startNewGame();