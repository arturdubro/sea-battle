let current;

function selectQuestion() {

    current = Math.round(Math.random() * (questions.length - 1));

    Math.round(Math.random() * 2);

    console.log(current)

    $("#question").text(questions[current].text);
}

function checkAnswer(val) {

    console.log(questions[current].answers)

    console.log(val);

    let check = questions[current].answers.indexOf(val + "") >= 0;

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
