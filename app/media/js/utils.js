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