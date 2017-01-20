/**
 * Created by adrianseehawer on 20.01.17.
 */

function WaveSurfaces(Length, Height) {

    var surfaces = [];

    /*
    for (var x = 0; x < Length; x++){
        for (var y = 0; y < Height; y++){

            var surface = {
                x: x,
                y: y,
                color: '#776655',
                life: 100
            };

            surfaces.push(surface);
        }
    }
    */

    function spawnWave(x, y, direction) {
        
        if(direction == 1) {

        } else if (direction == 2) {

        } else if (direction == 3) {

        } else  if (direction == 4) {

        }
    }
    
    
    function waveUp() {
        
    }
    
    function waveRight() {
        
    }
    
    function waveDown() {
        
    }

    function waveLeft() {
        
    }
    
    function GetSurfaces() {
        return surfaces;
    }

    function GetSurface(x, y) {
        return surfaces[ (y * Length) + x ];
    }

    return {
        GetSurfaces: GetSurfaces,
        GetSurface: GetSurface
    }
}