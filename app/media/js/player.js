/* DER PLAYER AYER AYER AYER YEAH */



function player(){
	var canvas = document.getElementById('player');
	var ctx = canvas.getContext("2d");


	const playerWidth = 20;
	canvas.width = width;
	canvas.height = height;
	var playerXPos = canvas.width/2;
	var playerYPos = canvas.height/2;

	var left = false;
	var right = false;
	var up = false;
	var down = false;


	function keyDownHandler(e){
		if(e.keyCode == 65){
			left = true;
		}
		if(e.keyCode == 68){
			right = true;
		}
		if(e.keyCode == 87){
			up = true;
		}
		if(e.keyCode == 83){
			down = true;
		}
		//console.log('down Handler');
	}

	function keyUpHandler(e){
		if(e.keyCode == 65){
			left = false;
		}
		if(e.keyCode == 68){
			right = false;
		}
		if(e.keyCode == 87){
			up = false;
		}
		if(e.keyCode == 83){
			down = false;
		}
		//console.log('up Handler');
	}


	function drawPlayer(){
		ctx.fillStyle = "#333333";
		ctx.beginPath();
		ctx.arc(playerXPos,playerYPos,playerWidth,0, 2 * Math.PI, false);
		ctx.closePath();
		ctx.fill();
	}

	return{
		drawPlayer : drawPlayer
	}



	/* EVENT LISTENER */
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

}







