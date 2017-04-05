function aiAttack(map) {

    const x = Math.round(Math.random() * 9);
    const y = Math.round(Math.random() * 9);

    console.log("aiAttack " + x + " " + y);

    if (map[x][y]) {

        $("#cell" + x + y).addClass("dead");

        setTimeout(function() {

            clearMapView();
            showStoryMap(aiMap);

            $("#text").text("Стреляй обратку скорее");

            attack = true;

        }, 1000);

    } else {

        $("#cell" + x + y).addClass("void");

        setTimeout(function() {
            aiAttack(userMap)
        }, 1000);
    }
}

function answer() {

    let val = $("input").val();

    checkAnswer(val);

    console.log();

    $("#container").load("./view/game.html", function () {

        htmlMap();

        showMap(userMap);

        $("#text").text("Бой стреляет в тебя!");

        $("footer").hide();

        setTimeout(function() {
            aiAttack(userMap)
        }, 1000);
    });
}

function shot(i, j) {

    console.log("shot: " + i + " " + j);

    if (attack) {

        if (aiMap[i][j]) {

            $("#cell" + i + j).addClass("dead");

            attack = false;

            setTimeout(function () {

                $("#container").load("./view/question.html", function () {

                    selectQuestion();
                });
            }, 500);

        } else {

            $("#cell" + i + j).addClass("void");
        }

    } else {

        // $("#cell" + i + j).addClass("");
    }
}


