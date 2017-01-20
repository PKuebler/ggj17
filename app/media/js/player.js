/* DER PLAYER AYER AYER AYER YEAH */



function Player(handlerAttack){
	var canvas = document.getElementById('player');
	var ctx = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;
	ctx.translate(width/2, 0);
	ctx.rotate(45*Math.PI/180);

	const playerWidth = 20;
	var playerXPos = 0;
	var playerYPos = 0;
	var velX = 0.0;
	var velY = 0.0;
	var playerVelocity = 0.0;
	const playerMaxSpeed = 1.0;
	const playerAcceleration = 0.3;
	const friction = 0.92;

	var tileSize = 32;

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
		if(e.keyCode == 32) {
			handlerAttack(getPlayerTilePos());
		}
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
	 		velY-=playerAcceleration;
	 	}
	 	if(down){
	 		velY+=playerAcceleration;
	 	}
	 	
	 	playerXPos+= velX;
	 	playerYPos += velY;
 		velX *= friction;
	 	velY *= friction;
	}

	function getPlayerTilePos() {
		var direction = {x: 0, y: 0};
		if (left)
			direction.x = -1;
		else if (right)
			direction.x = 1;

		if (up)
			direction.y = -1;
		else if (down)
			direction.y = 1;

		return {x: Math.floor(playerXPos/tileSize), y: Math.floor(playerYPos/tileSize), direction};
	}



	/* EVENT LISTENER */
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	return{
		drawPlayer : drawPlayer,
		updatePlayer : updatePlayer,
		playerXPos : playerXPos,
		playerYPos : playerYPos,
		getPlayerTilePos: getPlayerTilePos
	}


}
