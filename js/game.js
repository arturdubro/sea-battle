function aiAttack() {

    if (checkEnd(userMap)) {
        return;
    }

    const x = Math.round(Math.random() * 9);
    const y = Math.round(Math.random() * 9);

    console.log("aiAttack " + x + " " + y);

    console.log("cell: " + userMap[x][y]);

    //POPAL
    if (userMap[x][y] === "ship") {

        markShip(userMap, x, y);

        if (checkEnd(userMap)) {
            return;
        }

        setTimeout(function() {

            aiAttack();

        }, 1000);

    } else if (userMap[x][y] === "") {

        $("#text").text("Бой промазал");

        userMap[x][y] = "void";

        $("#cell" + x + y).addClass("void");

        setTimeout(function() {

            $("#text").text("Твой ход");

            clearMapView();

            showAiMap(aiMap);

            attack = true;

        }, 1000);

    } else {
        aiAttack();
    }
}

function answer() {

    let input = $("input");

    let val = input.val();

    if (val === "")
        return;

    let correct = false;

    if (checkAnswer(val)) {

        input.addClass("true");
        $("#text").text("Истинно!");
        correct = true;

        $("footer").hide();

        loadMap(correct);

    } else {

        input.addClass("false");
        $("#text").text("Ошибочно!");

        setTimeout(function() {
            $("input").removeClass("false");
            $("#text").text("Истина где-то рядом");
            input.val("")
        }, 1000);
    }
}

function loadMap(correct) {

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

            if (checkEnd(aiMap)) {
                return;
            }

            attack = false;

            setTimeout(function () {

                $("#container").load("./view/question.html", function () {

                    selectQuestion();
                });

            }, 1000);

        } else if (aiMap[i][j] === "") {

            aiMap[i][j] = "void";

            $("#cell" + i + j).addClass("void");

            attack = false;

            $("#text").text("Промазал");

            setTimeout(function() {

                clearMapView();
                showMap(userMap);

                $("#text").text("Бой атакует");

                setTimeout(function() {
                    aiAttack();
                }, 1000);

            }, 1000);
        }

    } else {

        // $("#cell" + i + j).addClass("");
    }
}


