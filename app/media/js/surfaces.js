/**
 * Created by adrianseehawer on 20.01.17.
 */

function Surfaces(Length, Height, colorset) {

    var surfaces = [];

    for (var y = 0; y < Height; y++){
        for (var x = 0; x < Length; x++){

            var life = 0;
            if (y > 0 && y < Height-1 && x > 0 && x < Length-1) {
                life = 100;
            }

            var surface = {
                x: x,
                y: y,
                color: colorset.tile(),
                life: life,
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