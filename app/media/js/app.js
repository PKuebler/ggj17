
player();
// loop
function loop() {
	// render if update

	window.requestAnimFrame(loop);
	player().drawPlayer();
}

// start loop
loop();
