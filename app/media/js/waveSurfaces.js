/**
 * Created by adrianseehawer on 20.01.17.
 */

function WaveSurfaces(surfaceWaves) {

    var maxValue = 60;
    var delay = 5;

    function SpawnWave(x, y, direction) {
        for(var i = x; i < x+10; i++){
            var surface = surfaceWaves.GetSurface(i, y);
            if(surface != null){
                surface.waves.push({
                    start:delay*(i-x),
                    end:maxValue
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
                    surface.waves[j].end = Math.max(surface.waves[j].end -1, 0);
                    if(surface.waves[j].end == 0){
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