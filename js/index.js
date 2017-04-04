$(document).ready(function() {

    $("#container").load("./view/main.html");
});

let attack = false;

// document.getElementById("body").requestFullscreen();

function init() {

    // document.body.requestFullscreen();

    $("#container").load("./view/game.html", function () {

        for (let i = 0; i < 10; i++) {

            $("#field").append("<div class='rowCell' id='row" + i + "'></div>");

            for (let j = 0; j < 10; j++) {

                $("#row" + i).append("<div class='cell' id='cell" + i + j + "' onclick='cell(" + i + " ," + j + ")'></div>");
            }
        }

        // window.scrollTo(0, 1);
    });
}

function start() {

    $("#text").text("Стреляй по бою!");

    $("footer").hide();

    attack = true;

    // $("#container").load("./view/main.html" );
}

function random() {
    console.log()
}

function cell(i, j) {

    console.log("cell: " + i + " " + j);

    if (attack) {

        $("#cell" + i + j).addClass("dead");

        setTimeout(function() {
            $("#container").load("./view/question.html");
        }, 500);



    } else {

        $("#cell" + i + j).addClass("shot");
    }


}
