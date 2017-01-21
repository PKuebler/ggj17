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
			bg : function() {
				return "rgba("+(8+randomInt(range))+", "+(140+randomInt(range))+", "+(153+randomInt(range))+", 1)"				
			}
		},
		{
			p1 : "rgba(235, 49, 68, 1)",
			p2 : "rgba(234, 226, 0, 1)",
			tile : function() {
				return "rgba("+(230+randomInt(range))+", "+(125+randomInt(range))+", "+(136+randomInt(range))+", 1)"
			},
			wave : "rgba(234, 226, 0, 1)",
			bg : function() {
				return "rgba("+(0+randomInt(range))+", "+(103+randomInt(range))+", "+(154+randomInt(range))+", 1)"				
			}
		},
		{
			p1 : "rgba(54, 52, 56, 1)",
			p2 : "rgba(33, 91, 64, 1)",
			tile : function() {
				return "rgba("+(195+randomInt(range))+", "+(48+randomInt(range))+", "+(57+randomInt(range))+", 1)"
			},
			wave : "rgba(7, 133, 124, 1)",
			bg : function() {
				return "rgba("+(255+randomInt(range))+", "+(158+randomInt(range))+", "+(0+randomInt(range))+", 1)"				
			}
		},
		{
			p1 : "rgba(173, 52, 62, 1)",
			p2 : "rgba(71, 71, 71, 1)",
			tile : function() {
				return "rgba("+(235+randomInt(range))+", "+(160+randomInt(range))+", "+(35+randomInt(range))+", 1)"
			},
			wave : "rgba(7, 133, 124, 1)",
			bg : function() {
				return "rgba("+(15+randomInt(range))+", "+(15+randomInt(range))+", "+(15+randomInt(range))+", 1)"				
			}
		},
		{
			p1 : "rgba(36, 123, 160, 1)",
			p2 : "rgba(243, 255, 189, 1)",
			tile : function() {
				return "rgba("+(235+randomInt(range))+", "+(160+randomInt(range))+", "+(170+randomInt(range))+", 1)"
			},
			wave : "rgba(178, 219, 191, 1)",
			bg : function() {
				return "rgba("+(230+randomInt(range))+", "+(10+randomInt(range))+", "+(75+randomInt(range))+", 1)"				
			}
		},
		{
			p1 : "rgba(134, 153, 345, 1)",
			p2 : "rgba(188, 187, 189, 1)",
			tile : function() {
				return "rgba("+(230+randomInt(range))+", "+(230+randomInt(range))+", "+(230+randomInt(range))+", 1)"
			},
			wave : "rgba(172, 224, 216, 1)",
			bg : function() {
				return "rgba("+(30+randomInt(range))+", "+(222+randomInt(range))+", "+(222+randomInt(range))+", 1)"				
			}
		}
	];

	function randomInt(max) {
		return Math.floor(1 + Math.random()*((max-1)));
	}
	
	function randomColorSet(){
		return COLORSETS[Math.floor(1 + Math.random()*((COLORSETS.length-1)))];
	}
	return{
		randomColorSet : randomColorSet
	}

}