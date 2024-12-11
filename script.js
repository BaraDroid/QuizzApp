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

let currentQuestion = 0;

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
}