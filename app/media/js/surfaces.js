/**
 * Created by adrianseehawer on 20.01.17.
 */

function Surfaces(Length, Height) {

    var surfaces = [];

    for (var y = 0; y < Height; y++){
        for (var x = 0; x < Length; x++){

            var surface = {
                x: x,
                y: y,
                color: '#776655',
                life: 100,
                waves: []
            };

            surfaces.push(surface);
        }
    }

    function GetSurfaces() {
        return surfaces;
    }

    function GetSurface(x, y) {
        console.log(x,y,Length,surfaces[ (y * Length) + x ]);
        return surfaces[ (y * Length) + x ];
    }

    function SetLife(x, y, life) {
        GetSurface(x, y).life = life;
    }

    return {
        GetSurfaces: GetSurfaces,
        GetSurface: GetSurface,
        SetLife: SetLife
    }
}