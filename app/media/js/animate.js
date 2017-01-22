
/* ANI ANI ANIMAAAAAAAAAATTEE HERO POWER - NI NI NI NI NINJAS */

function Animate(){

	var offset = {
		top : 0,
		bottom : 0,
		left : 0,
		right : 0
	};

	var body = null;
	var font = null;
	var waves = null;
	var player = null;
	var background = null;
	var bg = null;

	var canvasi = [body = document.getElementsByTagName('body'),font = document.getElementById('font'),waves = document.getElementById('waves'),waves = document.getElementById('player'),waves = document.getElementById('background'),waves = document.getElementById('bg')];


	function shake(){
		for(a = 1; a < canvasi.length; a++){
			canvasi[a].className = "shake";
		}
		setTimeout(function(){clearCanvasClasses();},250);
	}

	/*playershake on canvas*/
	// increase * time - floor bis max
		//var loop = Math.floor(3 + Math.random()*((7-1)))
		//var max = Math.floor(8 + Math.random()*((16-1)));
		
	function clearCanvasClasses(){
		for(a = 1; a < canvasi.length; a++){
			canvasi[a].removeAttribute("class");
		}
	}

	return{
		shake : shake
	}
}