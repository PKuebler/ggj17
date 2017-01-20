/* DER PLAYER AYER AYER AYER YEAH */



function Player(){
	var canvas = document.getElementById('player');
	var ctx = canvas.getContext("2d");


	const playerWidth = 20;
	canvas.width = width;
	canvas.height = height;
	var playerXPos = canvas.width/2;
	var playerYPos = canvas.height/2;
	console.log("1");
	var velX = 0.0;
	var velY = 0.0;
	var playerVelocity = 0.0;
	const playerMaxSpeed = 1.0;
	const playerAcceleration = 0.3;
	const friction = 0.96;

	var left = false;
	var right = false;
	var up = false;
	var down = false;

console.log("2");
	function keyDownHandler(e){
		if(e.keyCode == 65){
			left = true;
		}
		if(e.keyCode == 68){
			velX+=playerAcceleration;
			right = true;
		}
		if(e.keyCode == 87){
			velY+=playerAcceleration;
			up = true;
		}
		if(e.keyCode == 83){
			velY-=playerAcceleration;
			down = true;
		}
		console.log('down Handler');
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
		console.log('up Handler');
	}


	function drawPlayer(){
		ctx.clearRect(playerXPos-50,playerYPos-50,100,100);

		ctx.fillStyle = "#DD3333";
		ctx.beginPath();
		ctx.arc(playerXPos,playerYPos,playerWidth,0, 2 * Math.PI, false);
		ctx.closePath();
		ctx.fill();
	}

	 function updatePlayer(){

	 	if(left){
			velX-=playerAcceleration;

	 	}
	 	if(right){
	 		velX+=playerAcceleration;
	 	}
	 	if(up){
	 		velY+=playerAcceleration;
	 	}
	 	if(down){
	 		velY-=playerAcceleration;
	 	}

	 	
	 
	 	playerXPos+= velX;
	 	playerYPos += velY;
	 		velX *= friction;
	 	velY *= friction; 
	}



	/* EVENT LISTENER */
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	return{
		drawPlayer : drawPlayer,
		updatePlayer : updatePlayer
	}


}







