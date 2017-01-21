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

function startNewGame() {
	isRun = false;

	font.clear();

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

	newGameCountDown = TIME_BETWEEN_ROUNDS;

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
            // set timer
            updateCountdown(newGameCountDown);
            if (newGameCountDown == 0) {
            	if(playerController.score.player1 == 1 && isRun){
					score.player1++;
					console.log("p1");
				}else{
					score.player2++;
					console.log("p2");
				}
                startNewGame();
            } else {
                newGameTimer = setTimeout(function() {
                    newGameTimer = null;
                }, 1000);
            }
           
            newGameCountDown--;
        }

	}
	window.requestAnimFrame(loop);
}

function updateCountdown(num) {
	font.clear();
	font.drawInt(num, Math.floor(MAP_SIZE.x/2)-2,Math.floor(MAP_SIZE.y/2)-3, "#333355");
}

// start loop
loop();
startNewGame();