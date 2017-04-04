$(document).ready(function() {

    $("#container").load("./view/main.html");
});

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
    $("#container").load("./view/main.html" );
}

function random() {
    console.log(Math.round(Math.random() * 10))
}

function cell(i, j) {
    console.log("cell: " + i + " " + j);
    $("#cell" + i + j).addClass("shot");
}
