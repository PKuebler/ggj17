
/* ANI ANI ANIMAAAAAAAAAATTEE HERO POWER - NI NI NI NI NINJAS */

function Animate(){

	var offset = {
		top : 0,
		bottom : 0,
		left : 0,
		right : 0
	};
	var clicked = false;
	var splash = document.getElementById('splashscreen');
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

	function fadeoutUI(){
			splash.className = 'fadeout';
			setTimeout(function(){
			splash.removeEventListener('click',clickHandler);
				splash.remove();
			},550);
			clicked = true;
	}


function clickHandler(){ // declare a function that updates the state
		if(!clicked){
  			fadeoutUI();
			splash.removeEventListener('click',clickHandler);
		}
}

// grab a reference to your element
if(document.getElementById('splashscreen')!=null){
	splash.addEventListener('click', clickHandler);
}

	return{
		shake : shake,
		fadeoutUI : fadeoutUI
	}
}