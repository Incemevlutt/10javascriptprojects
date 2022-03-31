const quizData = [
    {
        question: "What is the capital of India?",
        a: "New Delhi",
        b: "Mumbai",
        c: "Chennai",
        d: "Kolkata",
        correct: "a"
    }, {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Markup Language",
        correct: "a"
    },
    {
        question: "who is the founder of Google?",
        a: "Larry Page",
        b: "Sergey Brin",
        c: "Bill Gates",
        d: "Larry Page, Sergey Brin",
        correct: "d"
    }, {
        question: "What is the most used programming language in the world?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },{
        question:"when is the javascript language first released?",
        a:"1995",
        b:"1996",
        c:"1997",
        d:"1998",
        correct:"b"
    }];
     

    
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});