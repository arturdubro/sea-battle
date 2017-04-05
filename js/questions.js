function selectQuestion() {

    $("#question").text(questions[0].text);
}

function checkAnswer(val) {

    let check = (val === "Паспорт");

    console.log("Answer: " + check)

    return check;
}

let questions = [

    {
        text: "Ваш дом со всем вашим имуществом загорелся. После спасения близких и домашних животных у вас есть время, чтобы забежать в дом еще раз и спасти какую-то одну вещь. Что бы это могло быть?",
        answers: ["Паспорт", "Хуй", "Себя"]
    },
    {
        text: "Ответь 1 или 2",
        answers: ["1", "2", "0"]
    }
];
