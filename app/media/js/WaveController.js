
function WaveController(surefaces) {

	function step(pos, i, playerID, direction) {
		if (pos.x < 0 || pos.y < 0 || pos.x > MAP_SIZE.x || pos.y > MAP_SIZE.y) {
			// out of map
			return;
		}

		// get sureface
		var sureface = surefaces.GetSurface(pos.x,pos.y);
		if (sureface != null) {
			surefaces.SetLife(pos.x,pos.y,sureface.life-30);
			sureface.waves.push({
				delay: WAVE_ANIMATION.delay.step*(-i),
				fadeIn: null,
				fadeOut: null,
				playerID: playerID,
				direction: direction
			});
		}
	}

	function UpdateWave() {
		var faces = surefaces.GetSurfaces();

		for (var i = 0; i < faces.length; i++) {
			var sureface = faces[i];

			for (var j = 0; j < sureface.waves.length; j++) {
				var wave = sureface.waves[j];

				if (wave.delay != null) {
					wave.delay+= WAVE_ANIMATION.delay.step;

					if (wave.delay >= WAVE_ANIMATION.delay.endValue) {
						wave.delay = null;
						wave.fadeIn = WAVE_ANIMATION.fadeIn.startValue;
					}
				} else if (wave.fadeIn != null) {
					wave.fadeIn+= WAVE_ANIMATION.fadeIn.step;

					if (wave.fadeIn >= WAVE_ANIMATION.fadeIn.endValue) {
						wave.fadeIn = null;
						wave.fadeOut = WAVE_ANIMATION.fadeOut.startValue;
					}
				} else if (wave.fadeOut != null) {
					wave.fadeOut+= WAVE_ANIMATION.fadeOut.step;

					if (wave.fadeOut <= WAVE_ANIMATION.fadeOut.endValue) {
						wave.fadeOut = null;
						sureface.waves.splice(j,1);
					}
				}
			}
		}
	}

	return {
		UpdateWave: UpdateWave,
		run: function(direction, pos, i, playerID) {
			run(direction, pos, i, step, playerID);
		}
	}
}