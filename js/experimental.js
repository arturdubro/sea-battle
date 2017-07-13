let fleet = [0, 4, 3, 2, 1]; //четыре однопалубных или один четырехпалубный
// let fleet = [0, 1];

function fillMapArray2(map, count) {

    // console.log("-- new --")

    //[i] - cell count ship
    for (let i = 0; i < fleet.length; i++) {

        // i палубы
        for (let j = 0; j < fleet[i]; j++) {

            // console.log(i + " blocks [" + j + "]");

            //j индекс в строю одинаковых

            //наш первый однопалубный и остальные

            //ищем рандомное место

            let fit = false;

            let danger = 0;

            while(!fit) {

                danger++;
                if (danger > 1000)
                    break;

                //проверяем поместится или нет

                let x = Math.round(Math.random() * 9);
                let y = Math.round(Math.random() * 9);

                if (x + i > 9 && y + i > 9)
                    continue;

                if (map[x][y] !== "ship" && checkNeighbors(map, x, y) && !checkShipAround(map, x, y)) {

                    // console.log("checkNeighbors for " + x + " " + y)

                    //проверяем пока у нас есть палубы

                    let find = true;

                    // вниз
                    if (x + i <= 9) {

                        for (let deck = 0; deck < i; deck++) {

                            if (map[x+deck][y] === "ship" || !checkNeighbors(map, x+deck, y) || checkShipAround(map, x+deck, y)) {

                                find = false;
                            }
                        }

                        if (find) {

                            map[x][y] = "ship";
                            $("#cell" + x + y).addClass("ship");

                            for (let deck = 0; deck < i; deck++) {
                                map[x+deck][y] = "ship";
                                $("#cell" + (x+deck) + (y)).addClass("ship");
                            }

                            // console.log("place " + x + " " + y + " bottom")

                            break;
                        }
                    }

                    // if (fit)
                    //     break;

                    find = true;

                    // и вправо
                    if (y + i <= 9) {

                        for (let deck = 0; deck < i; deck++) {

                            if (map[x][y+deck] === "ship" || !checkNeighbors(map, x, y+deck) || checkShipAround(map, x, y+deck)) {

                                find = false;
                            }
                        }

                        if (find) {

                            map[x][y] = "ship";
                            $("#cell" + x + y).addClass("ship");

                            for (let deck = 0; deck < i; deck++) {
                                map[x][y+deck] = "ship";
                                $("#cell" + (x) + (y+deck)).addClass("ship");
                            }

                            // console.log("place " + x + " " + y + " right")

                            break;
                        }
                    }

                    // if (fit)
                    //     break;
                }
            }

            // map[x][y] = "ship";

            //провероить если влезает

            // fleet[i][j]

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

    // console.log(map)
}
