// Used Variables
var width = window.innerWidth,
    height = window.innerHeight-18;
var devicePixelRatio = window.devicePixelRatio || 1;


// Init
var surfaces = Surfaces(20, 20);

// Renderer
var renderer = RenderTiles("background");


// loop
function loop() {
	// render if update
	renderer.draw(surfaces.GetSurfaces());

	window.requestAnimFrame(loop);
}

// start loop
loop();