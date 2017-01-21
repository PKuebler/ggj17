/* DER PLAYER AYER AYER AYER YEAH */

function Player(id, ctx, keyLayout, color, waves){
	var pos = {
		x: 10*TILE_SIZE,
		y: 10*TILE_SIZE
	};
	var velocity = {
		x: 0.0,
		y: 0.0
	};

	var left = false;
	var right = false;
	var up = false;
	var down = false;

	var isDead = false;

	const playerAcceleration = 0.6;
	const friction = 0.92;

	function setDead() {
		isDead = true;
	}

	// Key Handling
	function keyDownHandler(e) {
		if (isDead)
			return;

		if (e.keyCode == keyLayout.left) {
			left = true;
			right = false;
		} else if (e.keyCode == keyLayout.right) {
			left = false;
			right = true;
		}
		if (e.keyCode == keyLayout.up) {
			up = true;
			down = false;
		} else if (e.keyCode == keyLayout.down) {
			up = false;
			down = true;
		}
	}

	function keyUpHandler(e){
		if (isDead)
			return;

		if(e.keyCode == keyLayout.left){
			left = false;
		}
		if(e.keyCode == keyLayout.right){
			right = false;
		}
		if(e.keyCode == keyLayout.up){
			up = false;
		}
		if(e.keyCode == keyLayout.down){
			down = false;
		}
		if(e.keyCode == keyLayout.action) {
			actionButton(getPlayerTilePos());
		}
	}

	// action Button
	function actionButton(pos) {
		//waves.SpawnWave(pos.y, pos.x, pos.direction);
		waves.run(pos.direction, pos, WAVE_LENGTH, id);
	}

	// Draw
	function drawPlayer(){
		ctx.fillStyle = color;
		if (isDead) {
	        ctx.fillRect(pos.x,pos.y,TILE_SIZE/2,TILE_SIZE/4);
	    } else {
	        ctx.fillRect(pos.x,pos.y,TILE_SIZE/4,TILE_SIZE/2);	    	
	    }

//		ctx.beginPath();
//		ctx.arc(pos.x,pos.y,PLAYER_WIDTH,0, 2 * Math.PI, false);
//		ctx.closePath();
//		ctx.fill();
	}

	// Update
	function updatePlayer() {
		if (isDead)
			return;

		if (left)
			velocity.x-=playerAcceleration;
		else if (right)
			velocity.x+=playerAcceleration;
		if (up)
			velocity.y-=playerAcceleration;
		else if (down)
			velocity.y+=playerAcceleration;

		pos.x += velocity.x;
		pos.y += velocity.y;
		velocity.x *= friction;
		velocity.y *= friction;
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

		return {x: Math.floor(pos.x/(TILE_SIZE+MARGIN)), y: Math.floor((pos.y+TILE_SIZE/2)/(TILE_SIZE+MARGIN)), direction};
	}

	/* EVENT LISTENER */
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	return{
		drawPlayer : drawPlayer,
		updatePlayer : updatePlayer,
		getPlayerTilePos: getPlayerTilePos,
		setDead: setDead,
		playerID: id
	}


}
