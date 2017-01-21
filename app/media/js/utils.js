// Fallback
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

// Remap
function remap(value, low1, high1, low2, high2) {
	return low2 + (value - low1) * (high2 - low2) / (high1 - low1);
}

// direction, start position, wie oft, funktion bei jedem step ausführen, i = 0
function run(direction, pos, max, callback, i) {
	if (i == null) {
		i = 0;
	}

	pos.x+=direction.x
	pos.y+=direction.y

	callback(pos);

	i++;

	if (i < max) {
		run(direction, pos, max, callback, i);
	}
}
