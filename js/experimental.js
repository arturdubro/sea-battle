let fleet = [4, 3, 2, 1];

function fillMapArray2(map, count) {

    // let randConst = 100 / count;
    let randConst = 5;


    //[i] - cell count ship
    for (let i = 0; i < fleet.length; i++) {

        for (let j = 0; j < fleet[i]; j++) {


        }
    }

    // for (let i = 0; i < 10; i++) {
    //
    //     for (let j = 0; j < 10; j++) {
    //
    //         if (map[i][j] !== "ship" &&
    //             Math.round(Math.random() * randConst) === 1 &&
    //             checkNeighbors(map, i, j)) {
    //
    //             map[i][j] = "ship";
    //
    //             count--;
    //
    //             $("#cell" + i + j).addClass("ship");
    //
    //             if (count <= 0) {
    //                 return;
    //             }
    //         }
    //     }
    // }
    //
    // if (count > 0)
    //     fillMapArray(map, count);
}
