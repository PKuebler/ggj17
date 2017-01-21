function ColorSets(){
	var range = 20;

	var COLORSETS = [
		{
			p1 : "rgba(234, 207, 23, 1)",
			p2 : "rgba(153, 15, 93, 1)",
			tile : function() {
				return "rgba("+(230+randomInt(range))+", "+(0+randomInt(range))+", "+(129+randomInt(range))+", 1)"
			},
			wave : "rgba(18, 165, 179, 1)",
			bg : "rgba(8, 140, 153, 1)",
		},
		{
			p1 : "rgba(235, 49, 68, 1)",
			p2 : "rgba(234, 226, 0, 1)",
			tile : function() {
				return "rgba("+(230+randomInt(range))+", "+(125+randomInt(range))+", "+(136+randomInt(range))+", 1)"
			},
			wave : "rgba(234, 226, 0, 1)",
			bg : "rgba(0, 103, 154, 1)",
		},
		{
			p1 : "rgba(54, 52, 56, 1)",
			p2 : "rgba(33, 91, 64, 1)",
			tile : function() {
				return "rgba("+(195+randomInt(range))+", "+(48+randomInt(range))+", "+(57+randomInt(range))+", 1)"
			},
			wave : "rgba(7, 133, 124, 1)",
			bg : "rgba(255, 158, 0, 1)",
		},
		{
			p1 : "rgba(0, 0, 0, 1)",
			p2 : "rgba(188, 187, 189, 1)",
			tile : "rgba(255, 255, 255, 1)",
			tile : function() {
				return "rgba("+(230+randomInt(range))+", "+(230+randomInt(range))+", "+(230+randomInt(range))+", 1)"
			},
			wave : "rgba(160, 219, 251, 1)",
			bg : "rgba(30, 222, 222, 1)",
		}
	];

	function randomInt(max) {
		return Math.floor(1 + Math.random()*((max-1)));
	}
	
	function randomColorSet(){
		var rndm = Math.floor(1 + Math.random()*((COLORSETS.length-1)));
		console.log(rndm);
		return COLORSETS[rndm];
	}
	return{
		randomColorSet : randomColorSet
	}

}