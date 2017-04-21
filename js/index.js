$(document).ready(function() {

    $("#container").load("./view/main.html", function () {});
});

//random count, for fun
let generate = 0;

//flag ai or user attack
let attack = false;

//ship maps
let userMap = [];
let aiMap = [];

//box generator count
let count = 20;

//ai box generator count
let aiCount = 20;

// document.getElementById("body").requestFullscreen();

function init() {

    // document.body.requestFullscreen();

    $("#container").load("./view/game.html", function () {

        htmlMap();

        initMap(userMap, count);

        $("#text").text(text.ships);
    });
}

function random() {

    generate++;

    if (generate === 10) {
        $("#text").text("Просто нажми начать уже");
    }

    if (generate > 20 && generate < 30) {
        $("#text").text("Печенек: " + generate);
    }

    if (generate === 30) {
        $("#text").text("Плюс один квадрат");
        count++;
    }

    if (generate === 40) {
        $("#text").text("Минус пять квадратов");
        count = count - 5;
    }

    if (generate === 50) {
        $("#text").text("Там дальше еще всякие скучные вопросы");
        count = 20;
    }

    clearMapView();

    initMap(userMap, count);
}

function start() {

    $("footer").hide();

    $("#text").text("Выстреливай по бою!");

    initMap(aiMap, aiCount);

    clearMapView();

    showAiMap(aiMap);

    attack = true;
}

function end() {
    $("#container").load("./view/end.html", function () {});
}

