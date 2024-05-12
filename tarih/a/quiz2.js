const questions = [
    {
        question: "Hangisi Yıldırım Beyazıt'ın yönettiği savaştır?",
        answers: [
            { text: "Kosova savaşı", correct: false},
            { text: "Niğbolu Savaşı", correct: true},
            { text: "Mohaç Savaşı", correct: false},
            { text: "Haçova Savaşı", correct: false},
        ]
    },
    {
        question: "Rurik Hanedanı'nın son hükümdarı kimdir?",
        answers: [
            { text: "Korkunç İvan ", correct: true},
            { text: "I. Katerina", correct: false},
            { text: "III. Fyodor", correct: false},
            { text: "II.Nikolay", correct: false},
        ]
    },
    {
        question: "İspanya Veraset Savaşı'nı kim kazanmıştır?",
        answers: [
            { text: "Fransa ", correct: false},
            { text: "İngiltere", correct: false},
            { text: "Avusturya", correct: true},
            { text: "Rusya", correct: false},
        ]
    },
    {
        question: "İspanya'nın son Hasburg Hanedanına ait kralı kimdirr?",
        answers: [
            { text: "V. Charles ", correct: true},
            { text: "V. Ferdinand ", correct: false},
            { text: "III. Philip", correct: false},
            { text: "VI. Juan Carlos", correct: false},
        ]
    },
    {
        question: "1683 Viyana bozgunundan sonra kurulan Kutsal İttifaktaki hangi ülke Osmanlı ile diğerlerinden farklı barış antlaşması imzaladı? ",
        answers: [
            { text: "Venedik ", correct: false},
            { text: "Lehistan ", correct: false},
            { text: "Avusturya", correct: false},
            { text: "Rusya", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.style.display = "none"; // Skor container'ı başlangıçta gizlenmiş olacak
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    scoreDisplay.innerText = score;
    scoreContainer.style.display = "block";
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
