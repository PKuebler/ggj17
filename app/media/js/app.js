// Init
var surfaces = Surfaces(MAP_SIZE.x, MAP_SIZE.y);
var waves = WaveController(surfaces);
//var waves = WaveSurfaces(surfaces);

var colorset = ColorSets().randomColorSet();

// Renderer
var renderer = RenderTiles("background",colorset);
var waveRenderer = RenderTiles("waves",colorset);

// PlayerController
var playerController = PlayerController("player", waves,colorset);
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
