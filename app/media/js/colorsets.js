function ColorSets(){
	var COLORSETS = [
		{
			p1 : "#EACF17",
			p2 : "#990F5D",
			tile : "#E60081",
			wave : "#12A5B3",
			bg : "#088C99",
		},
		{
			p1 : "#EB3144",
			p2 : "#EAE200",
			tile : "#E67D88",
			wave : "#EAE200",
			bg : "#00679A",
		},
		{
			p1 : "#363438",
			p2 : "#363438",
			tile : "#C33039",
			wave : "#07857C",
			bg : "#FF9E00",
		},
		{
			p1 : "#000000",
			p2 : "#BCBBBD",
			tile : "#FFFFFF",
			wave : "#A0DBFB",
			bg : "#1EDEDE",
		}

	];

	function randomColorSet(){
		return COLORSETS[Math.floor(Math.random(1.0,COLORSETS.length-1))];
	}

	return{
		randomColorSet : randomColorSet
	}

}