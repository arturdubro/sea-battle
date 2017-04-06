function aiAttack() {

    const x = Math.round(Math.random() * 9);
    const y = Math.round(Math.random() * 9);

    console.log("aiAttack " + x + " " + y);

    console.log("cell: " + userMap[x][y])

    if (userMap[x][y] === "ship") {

        markShip(userMap, x, y);

        setTimeout(function() {

            clearMapView();
            showAiMap(aiMap);

            $("#text").text("Стреляй обратку скорее");

            attack = true;

        }, 1000);

    } else if (userMap[x][y] === "") {

        userMap[x][y] = "void";

        $("#cell" + x + y).addClass("void");

        setTimeout(function() {
            aiAttack()
        }, 500);

    } else {
        aiAttack();
    }
}

function answer() {

    let input = $("input");

    let val = input.val();

    let correct = false;

    if (checkAnswer(val)) {

        input.addClass("true");
        $("#text").text("Истинно!");
        correct = true;

    } else {

        input.addClass("false");
        $("#text").text("Ошибочно!");
    }

    $("footer").hide();

    // console.log();

    setTimeout(function() {

        $("#container").load("./view/game.html", function () {

            $("input").removeClass("true");
            $("input").removeClass("false");

            htmlMap();

            $("footer").hide();

            if (correct) {

                showAiMap(aiMap);

                $("#text").text("Продолжай");

                attack = true;

                return;
            }

            showMap(userMap);

            $("#text").text("Бой стреляет в тебя!");

            setTimeout(function() {
                aiAttack()
            }, 1000);
        });

    }, 1000);
}

function no() {

    selectQuestion();

    $("#text").text("Ты благословлен");
}


function shot(i, j) {

    console.log("shot: " + i + " " + j);

    if (attack) {

        if (aiMap[i][j] === "ship") {

            markShip(aiMap, i, j);

            attack = false;

            setTimeout(function () {

                $("#container").load("./view/question.html", function () {

                    selectQuestion();
                });
            }, 500);

        } else if (aiMap[i][j] === "") {

            aiMap[i][j] = "void";

            $("#cell" + i + j).addClass("void");
        }

    } else {

        // $("#cell" + i + j).addClass("");
    }
}


