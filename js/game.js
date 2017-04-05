function aiAttack() {

    const x = Math.round(Math.random() * 9);
    const y = Math.round(Math.random() * 9);

    console.log("aiAttack " + x + " " + y);

    if (userMap[x][y] === "ship") {

        userMap[x][y] = "dead";

        $("#cell" + x + y).addClass("dead");

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
        }, 1000);

    } else {
        aiAttack();
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
            aiAttack()
        }, 1000);
    });
}

function no() {

    $("#text").text("Нельзя не ответить");
}


function shot(i, j) {

    console.log("shot: " + i + " " + j);

    if (attack) {

        if (aiMap[i][j] === "ship") {

            aiMap[i][j] = "dead";

            $("#cell" + i + j).addClass("dead");

            attack = false;

            setTimeout(function () {

                $("#container").load("./view/question.html", function () {

                    selectQuestion();
                });
            }, 500);

        } else {

            aiMap[i][j] = "void";

            $("#cell" + i + j).addClass("void");
        }

    } else {

        // $("#cell" + i + j).addClass("");
    }
}


