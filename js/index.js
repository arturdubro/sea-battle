$(document).ready(function() {

    $("#container").load("./view/main.html");
});

let generate = 0;

let attack = false;

let userMap = [];

let aiMap = [];

let count = 20;

let aiCount = 20

// document.getElementById("body").requestFullscreen();

function init() {

    // document.body.requestFullscreen();

    $("#container").load("./view/game.html", function () {

        htmlMap();

        initMap(userMap, count);

        $("#text").text("Твои кораблики");
    });
}

function random() {

    generate++;

    if (generate === 10) {
        $("#text").text("Просто нажми начать уже");
    }

    if (generate > 20 && generate < 40) {
        $("#text").text("Печенек: " + generate);
    }

    if (generate === 40) {
        $("#text").text("Плюс один квадрат");
        count++;
    }

    if (generate === 50) {
        $("#text").text("Минус пять квадратов");
        count = count - 10;
    }

    clearMapView();

    initMap(userMap, count);
}

function start() {

    $("#text").text("Стреляй по бою!");

    $("footer").hide();

    attack = true;

    initMap(aiMap, aiCount);

    clearMapView();

    // $("#container").load("./view/main.html" );
}

