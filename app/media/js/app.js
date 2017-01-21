// Used Variables
var width = window.innerWidth,
    height = window.innerHeight-18;
var devicePixelRatio = window.devicePixelRatio || 1;


// Init
var surfaces = Surfaces(MAP_SIZE.x, MAP_SIZE.y);
var waves = WaveSurfaces(surfaces);

// Renderer
var renderer = RenderTiles("background");
var waveRenderer = RenderTiles("waves");

// PlayerController
var playerController = PlayerController("player", waves);
playerController.spawnPlayer();

// loop
function loop() {
	// render if update
	playerController.update();

	renderer.drawTiles(surfaces.GetSurfaces());
	waveRenderer.drawWaves(surfaces.GetSurfaces());
	waves.UpdateWave();
	window.requestAnimFrame(loop);

}

// start loop
loop();
