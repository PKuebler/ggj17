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
                bg: colorset.bg(),
                life: life,
                waves: [],
                topSurface: ((y == 0)?null:surfaces[(y-1)*Length+x]),
                leftSurface: ((x == 0)?null:surfaces[y*Length+x-1])
            };

            surfaces.push(surface);
        }
    }

    function GetSurfaces() {
        return surfaces;
    }

    function GetSurface(x, y) {
        return surfaces[ (y * Length) + x ];
    }

    function SetLife(x, y, life) {
        GetSurface(x, y).life = Math.max(0,life);
    }

    return {
        GetSurfaces: GetSurfaces,
        GetSurface: GetSurface,
        SetLife: SetLife
    }
}