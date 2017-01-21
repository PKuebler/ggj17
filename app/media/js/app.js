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
var newGameCountDown = TIME_BETWEEN_ROUNDS;
var font = Font("font");
var soundInstance = Sound();

function startNewGame() {
	isRun = false;

	font.clear();

	// Init
	colorset = ColorSets().randomColorSet();

	//hier wird der Spielsound abgespielt
	soundInstance.playGameSong();

	surfaces = Surfaces(MAP_SIZE.x, MAP_SIZE.y, colorset);
	waves = WaveController(surfaces);
	//var waves = WaveSurfaces(surfaces);

	// Renderer
	bgRenderer = RenderBG("bg",colorset);
	renderer = RenderTiles("background",colorset);
	waveRenderer = RenderTiles("waves",colorset);

	// PlayerController
	playerController = PlayerController("player", waves,surfaces,colorset);
	playerController.spawnPlayer();
	playerController.spawnPlayer();

	newGameCountDown = TIME_BETWEEN_ROUNDS;

	bgRenderer.drawTiles(surfaces.GetSurfaces());

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
            if (newGameCountDown == TIME_BETWEEN_ROUNDS) {
            	if(playerController.getPointsToPlayerID() == 0){
					score.player1++;
				}else{
					score.player2++;
				}
            }
            // set timer
            updateCountdown(newGameCountDown);
            newGameCountDown--;
            if (newGameCountDown == -1) {
                startNewGame();
            } else {
                newGameTimer = setTimeout(function() {
                    newGameTimer = null;
                }, 1000);
            }
        }
	}
	window.requestAnimFrame(loop);
}

function updateCountdown(num) {
	font.clear();
	font.drawInt(num, Math.floor(MAP_SIZE.x/2)-2,Math.floor(MAP_SIZE.y/2)-3, "#333355");
	font.drawInt(score.player1, Math.floor(MAP_SIZE.x/6)-2,Math.floor(MAP_SIZE.y/2)-3, "#333355");
	font.drawInt(score.player2, Math.floor(MAP_SIZE.x/6*5),Math.floor(MAP_SIZE.y/2)-3, "#333355");
}

// start loop
loop();
startNewGame();