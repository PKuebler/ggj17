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

function handlerAttack(pos) {
	waves.SpawnWave(pos.y, pos.x, pos.direction);
}

var player = Player(handlerAttack);
// loop
function loop() {
	// render if update
	player.updatePlayer();
	player.drawPlayer();

	renderer.drawTiles(surfaces.GetSurfaces());
	waveRenderer.drawWaves(surfaces.GetSurfaces());
	waves.UpdateWave();
	window.requestAnimFrame(loop);

}

// start loop
loop();
