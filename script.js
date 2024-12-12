let questions = [
    {"question": "Welche Krankheit war auf Piratenschiffen weit verbreitet?",
        "answer_1": "Skorbut",
        "answer_2": "Covid",
        "answer_3": "Magen-Darm Krippe",
        "answer_4": "Tourett-syndrom",
        "right_answer": 1
    },
    {"question": "Wie viele Flächen hat ein Dodekaeder?",
        "answer_1": 8,
        "answer_2": 24,
        "answer_3": 36,
        "answer_4": 12,
        "right_answer": 4
    },
    {"question": "Welcher Planet der Milchstraße ist der heißeste?",
        "answer_1": "Mars",
        "answer_2": "Venus",
        "answer_3": "Pluto",
        "answer_4": "Sonne",
        "right_answer": 2
    },
    {"question": "Wie viele Knochen hat ein Ohr?",
        "answer_1": "keine",
        "answer_2": 1,
        "answer_3": 2,
        "answer_4": 3,
        "right_answer": 4
    },
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('./audio/success.wav');
let AUDIO_FAILURE = new Audio('./audio/failure.mp3');
let AUDIO_THE_END = new Audio('./audio/fanfare.mp3');

function init() {
    document.getElementById("questionsAmount").innerHTML = questions.length;
    showCurrentQuestion();
}

function showCurrentQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("questionTitle").innerHTML = question['question'];
    document.getElementById("answer_1").innerHTML = question['answer_1'];
    document.getElementById("answer_2").innerHTML = question['answer_2'];
    document.getElementById("answer_3").innerHTML = question['answer_3'];
    document.getElementById("answer_4").innerHTML = question['answer_4'];
    document.getElementById("questionOrder").innerHTML = currentQuestion + 1;
    document.getElementById("allAmount").innerHTML = questions.length;
    document.getElementById("correctAmount").innerHTML = rightQuestions;
    let percent = (currentQuestion + 1) / questions.length * 100;
    console.log(percent);
    percent = Math.round(percent);
    document.getElementById("quizProgress").innerHTML = `${percent}%`;
    document.getElementById("quizProgress").style.width = `${percent}%`;
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('current question is', question['right_answer']);

    let idOfRIghtAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add("bg-success");
        rightQuestions++;
        AUDIO_SUCCESS.play();
    }
    else {document.getElementById(selection).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRIghtAnswer).parentNode.classList.add("bg-success");
        AUDIO_FAILURE.play();
    }
    document.getElementById("nextButton").disabled = false; //es ist außerhalb else, da wir es auch bei schlechter Antwort aktivieren möchten
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("nextButton").disabled = true;
    resetAnswerButtons();
    showCurrentQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_1').parentNode.classList.remove("bg-success"); //dass mussten wir 8x ausführen
    document.getElementById('answer_2').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_2').parentNode.classList.remove("bg-success"); 
    document.getElementById('answer_3').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_3').parentNode.classList.remove("bg-success"); 
    document.getElementById('answer_4').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_4').parentNode.classList.remove("bg-success"); 
}

function lastQuestion() {   //könnte eigentlich anders heißen, aber so hat sie meine nextQuestion verschluckt (wegen der if Abfrage)
    if (currentQuestion < questions.length - 1) {
        nextQuestion();

    }
    else {
        document.getElementById("endScreen").style = '';
        document.getElementById("questionBody").style = 'display: none';
        AUDIO_THE_END.play();
    }
}

function restartGame() {
    //Junus ändert hier das Bild wieder zurück, das habe ich nicht gemacht
    //mit document.getElementById('header_img').src = 'pfad zu dem anderen Bild';
    rightQuestions = 0;
    currentQuestion = 0;    //beide variablen müssen wieder zur Anfangposition
    document.getElementById("endScreen").style = 'display: none;';
    document.getElementById("questionBody").style = '';
    init();
}