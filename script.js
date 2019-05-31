var matrix = [
    
]

var m = Math.round((Math.random() * 50) + 5)
var n = Math.round((Math.random() * 50) + 5)
var matrix = []
var side = 10
for (var y = 0; y < m; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        



        matrix[y].push(getRandomInt(6))
    }
} console.log(matrix)

var side = 50;
        var grassArr = [];
        var xotakerArr = [];
        var gishatichArr = [];
        var vorsordArr = [];
        var mibanArr = [];
function setup() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gt = new Gishatich(x, y)
                gishatichArr.push(gt)
            }
            else if (matrix[y][x] == 4) {
                var vr = new Vorsord(x, y)
                vorsordArr.push(vr)
            }
            else if (matrix[y][x] == 5) {
                var mi = new Miban(x, y)
                mibanArr.push(mi)
            }
        }
    }

    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#FFBFB1");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in vorsordArr) {
        vorsordArr[i].eat()
        vorsordArr[i].eat1()
        vorsordArr[i].move()
        //vorsordArr[i].move1()
        vorsordArr[i].mult()
        vorsordArr[i].die()
    }
    for (var i in mibanArr) {
        mibanArr[i].eat()
        mibanArr[i].eat1()
        mibanArr[i].move()
        mibanArr[i].mult()
        mibanArr[i].mult1()
        mibanArr[i].die()
    }
}

