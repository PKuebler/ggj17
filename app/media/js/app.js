// Init
var surfaces = Surfaces(MAP_SIZE.x, MAP_SIZE.y);
var waves = WaveController(surfaces);
//var waves = WaveSurfaces(surfaces);

var colorset = ColorSets().randomColorSet();

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
