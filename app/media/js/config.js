// Used Variables
var width = window.innerWidth,
    height = window.innerHeight-18;
var devicePixelRatio = window.devicePixelRatio || 1;

var WAVE_LENGTH = 6;

var TILE_SIZE = 32;
var MARGIN = 0;
var MAP_SIZE = {
	x: Math.floor(width/(TILE_SIZE+MARGIN)),
	y: Math.floor(height/(TILE_SIZE+MARGIN))
//	x: 20,
//	y: 20
};

var TIME_BETWEEN_ROUNDS = 3000; // milli

var PLAYER_WIDTH = TILE_SIZE/2;

var KEY_LAYOUT = [
	{ // awsd and space
		left: 65,
		right: 68,
		up: 87,
		down: 83,
		action: 32
	},
	player_2 = { // arrows and .
		left: 37,
		right: 39,
		up: 38,
		down: 40,
		action: 190
	}
];

var PLAYER_COLORS = [
	"#FF8000", "#AAF200"
];

var WAVE_ANIMATION = {
	delay: { // start value muss kleiner sein als end value
		step: 2,
		startValue: 0,
		endValue: 5
	},
	fadeIn: { // start value muss kleiner sein als end value
		step: 1.5,
		startValue: 0,
		endValue: 10
	},
	fadeOut: { // start value muss größer sein als end value
		step: -	0.5,
		startValue: 10,
		endValue: 0
	}
};