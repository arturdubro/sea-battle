let current;

let answered = [];

function selectQuestion() {

    current = Math.round(Math.random() * (questions.length - 1));

    if (answered.indexOf(current) > -1) {
        selectQuestion();
        return;
    }

    // console.log(current)

    $("#question").text(questions[current].text);
}

function checkAnswer(val) {

    console.log(questions[current].answers)

    console.log(val);

    let check = questions[current].answers.indexOf(val.trim().toLowerCase() + "") >= 0;

    // console.log("Answer: " + check)

    if (check)
        answered.push(current);

    return check;
}

let questions = [

    {
        text: "Без ПЕРВОГО не было бы ни музея, ни города. Без ВТОРОГО – возможно, не было бы революции. ПЕРВЫЙ - черный, ВТОРОЙ – белый. Обоих можно видеть с точки, на которой вы стоите. Формат ответа: имя ПЕРВОГО прозвище ВТОРОГО",
        answers: ["Петр Железняк", "петр железняк", "Петр железняк", "петр Железняк"]
    },
    {
        text: "На карте экспедиции первооткрывателей Антарктиды (1819-1821 гг.) есть остров, названный в честь человека, чьё имя вы точно знаете (ведь вы не только прошли мимо него, но и вбивали его в ответ). Какой меридиан к этому острову самый ближайший на этой карте? Формат ответа: число",
        answers: ["90"]
    },
    {
        text: "В самом большом экспозиционном зале должна находиться и самая большая модель в музее. Найдите этот линкор со 111-ю пушками и ответьте, КАКИМ военным кораблем в российском флоте с деревянным корпусом он был? Формат ответа: третьим",
        answers: ["последним"]
    },
    {
        text: "Судя по её достижениям во главе государства, она была Владычицей Морскою. По крайней мере, трон у нее точно был. А во время посещения какого города она им пользовалась? Формат ответа: Название",
        answers: ["Херсон"]
    },
    {
        text: "Главный золотой символ Адмиралтейства блестит и переливается ярким светом. Увидеть его таинственные символы может каждый, но только внимательный ответит на вопрос «Кем он был «возобновлёнъ»? Формат ответа: слесарем Хюбнеромъ",
        answers: ["архитектором Риглеромъ"]
    },
    {
        text: "Как будто мы на поле Куликовом! Вот стоит Ослябя! А вот – Витязь! А кто же это между ними? Формат ответа: Имя Фамилия",
        answers: ["Дмитрий Донской"]
    },
    {
        text: "Рассмотрите внимательно карту боевых действий эскадры русского флота под командованием Сенявина в южных морях. В порт какого острова пришла эскадра 18 января? Формат ответа: Название",
        answers: ["Корфу"]
    },
    {
        text: "Самая широкая яхта в этом зале была построена в Глазго. А названа она в честь известного места в Крыму. Формат ответа: Название",
        answers: ["Ливадия"]
    },
    {
        text: "Между НЕЙ Энгстрёмом и НЕЙ Фаррингтоном стоит еще одна ОНА. Назовите город, где она была изготовлена. Формат ответа: Название",
        answers: ["Гатфорд"]
    },
    {
        text: "Если вы умеете пользоваться компасом, то вам даже свой не понадобится. Ведь в направлении NW от «10 магнитного путевого компаса сухого типа» стоит ОНА. Назовите фамилию ЕЕ создателя. Формат ответа: Фамилия",
        answers: ["Джевецкий"]
    },
    {
        text: "Отличительной особенностью шлема с надписью 9258 является перенос травящего клапана оттуда. Откуда? Формат ответа: из ухи",
        answers: ["с котелка"]
    },
    {
        text: "Спустившись на первый этаж под анфиладой, вы согласитесь, что этот летающий объект немного странно видеть в морском музее. Тем не менее, море из него было видно прекрасно. А человек, им управлявший, стал первым дважды Героем Советского Союза за подвиги в ВОВ. Напишите сумму красных и белых, если известно, что красные надо посчитать, а белые не надо. Формат ответа: число",
        answers: ["73"]
    },
    {
        text: "Скрасить ожидание киносеанса вам поможет осмотр известного оборонительного сооружения в Кронштадте, получившего страшное альтернативное название благодаря испытаниям над животными в конце 19 - начале 20 вв. Как называется тот, что выходит впервые? Формат ответа: Генерал Печкин",
        answers: ["Адмирал Горшков"]
    },
    {
        text: "Александр и Николай засмотрелись на корабли, вспоминая, где те были построены. И хоть оба мужчины были не первыми, а каждым из них, даже Николаем, можно было бы наградить за третье место, города кораблестроительных верфей вы точно сможете назвать. Формат ответа: Город Город",
        answers: ["Або Севастополь", "Турку Севастополь"]
    },
    {
        text: "Отправляйтесь туда, где восходит солнце, и найдите уменьшенную копию великого подвига русских моряков. Назовите писателя, рядом с объектом имени которого в Петербурге находится оригинал. Кстати, вспомнить подвиг вам поможет столица Ямайки. Формат ответа: Имя Фамилия",
        answers: ["Максим Горький"]
    },
    {
        text: "Только «Внимательный» игрок, осматриваясь у рельефной обороны Порт-Артура, сможет верно назвать рыбу. Формат ответа: белуга",
        answers: ["Форель", "форель"]
    },
    {
        text: "Вспомнив, о каком «гордом строе» пел Александр Розенбаум, вы без труда найдёте первый, второй и третий. Первый когда-то тоже был в подобном построении кораблей третьим, но после выхода из строя первого и второго сам на некоторое время стал первым, пока не погиб. Второй назван в честь легендарного богатыря, но чуть менее известного, чем самые знаменитые три. На третьем служил брат известного путешественника с двойной фамилией. Назовите фамилию выжившего на одном из них. Формат ответа: Фамилия",
        answers: ["Ющин"]
    },
    {
        text: "Назовите журнал, в котором описывались и гибель знаменитого крейсера во время Первой мировой войны, и загадочная судьба русского летчика. Помочь вам может зал, где есть рогатая, спасательные, машинный, посыльное и даже первый новгородский. Формат ответа: Слово множественного числа",
        answers: ["Искры"]
    },
    {
        text: "В одном углу зала - британский гюйс. Во втором - бортовая надпись знаменитого ледокола. В третьем - карикатура, на которой польский пан остаётся без головы. Вам же нужна надпись на объекте из последнего угла, находящаяся на вагоне за тем же порядковым номером, что и сам угол. Формат ответа: слово слово слово",
        answers: ["вся власть советам", "Вся власть советам", "Вся Власть Советам"]
    },
    {
        text: "Средство звукового обнаружения подводных объектов с помощью акустического излучения",
        answers: ["гидролокатор", "эхолот", "сонар"]
    },
    {
        text: "Дуплет. Этот эскадренный броненосец назван в честь русского государственного деятеля, создателя и первого главнокомандующего Черноморского военного флота, известного также своими «деревнями». Найдите броненосец. 1. Вспомнив, ЧТО этот герой брал штурмом, назовите объект слева от НЕГО. 2. Внимательно осмотрите броненосец. Мы не знаем, играли ли в эту игру на самом корабле, но если вы железно рассмотрите все детали, вам наверняка придёт в голову именно её название. Формат ответа: Картечь Прятки",
        answers: ["мина домино", "Мина Домино", "мина кости", "Мина Кости"]
    },
];
