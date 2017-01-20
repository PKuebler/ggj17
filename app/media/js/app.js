// Used Variables
var width = window.innerWidth,
    height = window.innerHeight-18;
var devicePixelRatio = window.devicePixelRatio || 1;


// Init
var surfaces = Surfaces(20, 20);
var waves = WaveSurfaces(surfaces);

// Renderer
var renderer = RenderTiles("background");
var waveRenderer = RenderTiles("waves");

player();
// loop
function loop() {
	// render if update
	renderer.drawTiles(surfaces.GetSurfaces());
	waveRenderer.drawWaves(surfaces.GetSurfaces());
	waves.UpdateWave();
	window.requestAnimFrame(loop);
	player().drawPlayer();
}

// start loop
loop();
