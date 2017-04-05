// 4
// 33
// 222
// 1111
//
// 20

let fleet = [
    [4],
    [3, 3],
    [2, 2, 2],
    [1, 1, 1, 1]
];

// let count = 20;

function checkNeighbors(map, i, j) {

    // console.log(i + " " + j)

    if ((i > 0 && j > 0 && map[i-1][j-1]) ||
        (i > 0 && j < 9 && map[i-1][j+1]) ||
        (i < 9 && j > 0 && map[i+1][j-1]) ||
        (i < 9 && j < 9 && map[i+1][j+1]))
        return false;

    // if (i > 0 && j > 0)
    //     console.log(map[i-1][j-1] + " " + (i-1)+ " " + (j-1));
    //
    // if (i > 0 && j < 9)
    //     console.log(map[i-1][j+1] + " " + (i-1)+ " " + (j+1));

    return true;
}

function fill(map, count) {

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {

            if (map[i][j] !== true && Math.round(Math.random() * 4) === 1 && checkNeighbors(map, i, j)) {

                map[i][j] = true;

                count--;

                $("#cell" + i + j).addClass("ship");

                if (count <= 0) {
                    return;
                }
            }
        }
    }

    if (count > 0)
        fill(map, count);
}

function createMapArray(map) {

    for (let i = 0; i < 10; i++) {

        map[i] = [];

        for (let j = 0; j < 10; j++) {

            map[i][j] = false;
        }
    }
}

function initMap(map, count) {

    createMapArray(map);

    fill(map, count);

    // console.log(count)
}

function clearMapView() {

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {

            let cell = $("#cell" + i + j);

            cell.removeClass("ship");
            cell.removeClass("void");
            cell.removeClass("dead");
        }
    }
}

function showMap(map) {

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {

            if (map[i][j])
                $("#cell" + i + j).addClass("ship");
        }
    }
}

function showStoryMap() {

}

function htmlMap() {

    for (let i = 0; i < 10; i++) {

        $("#field").append("<div class='rowCell' id='row" + i + "'></div>");

        for (let j = 0; j < 10; j++) {

            $("#row" + i).append("<div class='cell' id='cell" + i + j + "' onclick='shot(" + i + " ," + j + ")'></div>");
        }
    }
}
