// Init
var colorset = ColorSets().randomColorSet();

var surfaces = Surfaces(MAP_SIZE.x, MAP_SIZE.y, colorset);
var waves = WaveController(surfaces);
//var waves = WaveSurfaces(surfaces);

// Renderer
var renderer = RenderTiles("background",colorset);
var waveRenderer = RenderTiles("waves",colorset);

// PlayerController
var playerController = PlayerController("player", waves,surfaces,colorset);
playerController.spawnPlayer();
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
