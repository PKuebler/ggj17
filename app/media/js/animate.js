
/* ANI ANI ANIMAAAAAAAAAATTEE HERO POWER - NI NI NI NI NINJAS */

function Animate(){

	var offset = {
		top : 0,
		bottom : 0,
		left : 0,
		right : 0
	};

	var body = document.getElementsByTagName('body');
	var font = document.getElementById('font');
	var waves = document.getElementById('waves');
	var player = document.getElementById('player');
	var background = document.getElementById('background');
	var bg = document.getElementById('bg');

	console.log(body);

	function shake(){
		console.log("shakeScreen");
		// increase * time - floor bis max
		var loop = Math.floor(3 + Math.random()*((7-1)))
		var increase = Math.floor(8 + Math.random()*((16-1)));

		player.className += 'shake';
		
	}

	return{
		shake : shake
	}
}