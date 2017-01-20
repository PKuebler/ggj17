/**
 * Created by adrianseehawer on 20.01.17.
 */

function WaveSurfaces(surfaceWaves) {

    var maxValue = 100;

    function SpawnWave(x, y, direction) {

        /*
        if(direction == 1) {

        } else if (direction == 2) {

        } else if (direction == 3) {

        } else  if (direction == 4) {

        }
        */

        for(var i = x; i < (x + 10); i++){

            var surface = surfaceWaves.GetSurface(i, y);
            console.log(surface);
            if(surface != null){
                surface.waves.push({
                    start:10,
                    end:0
                });

            }
        }
    }

    function UpdateWave() {
        var surfaceses = surfaceWaves.GetSurfaces();
        for (var i = 0; i < surfaceses.length; i++){
            var surface = surfaceses[i];
            for(var j = 0; j < surface.waves.length; j++){
                surface.waves[j].start = Math.max(surface.waves[j].start -1, 0);
                if(surface.waves[j].start == 0){
                    surface.waves[j].end = Math.min(surface.waves[j].end +1, maxValue );
                    if(surface.waves[j].end == maxValue){
                        surface.waves.splice(j, 1);
                    }
                }
            }
        }
    }
    
    function GetSurfaces() {
        return surfaces;
    }

    function GetSurface(x, y) {
        return surfaces[ (y * Length) + x ];
    }

    return {
        GetSurfaces: GetSurfaces,
        GetSurface: GetSurface,
        SpawnWave: SpawnWave,
        UpdateWave: UpdateWave
    }
}