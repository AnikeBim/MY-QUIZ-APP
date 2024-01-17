const questionElement = document.getElementById("questions")
const answerBtn = document.getElementById("answer-button")
const nextBtn = document.getElementById("next-btn")

const quizQuestion = [
    {
        question: "how many states are there in Nigeria?",
        answers: [
            {text:"50 states", correct: false,},
            {text:"30 states", correct: false,},
            {text:"36 states", correct: false,},
            {text:"37 states", correct: false,},       
        ]
    },
    
    {
        question: "how many states are there in Nigeria?",
        answers: [
            {text:"50 states", correct: false,},
            {text:"30 states", correct: false,},
            {text:"36 states", correct: false,},
            {text:"37 states", correct: false,},       
        ]
    },

    {
        question: "how many states are there in Nigeria?",
        answers: [
            {text:"50 states", correct: false,},
            {text:"30 states", correct: false,},
            {text:"36 states", correct: false,},
            {text:"37 states", correct: false,},       
        ]
    },

    {
        question: "how many states are there in Nigeria?",
        answers: [
            {text:"50 states", correct: false,},
            {text:"30 states", correct: false,},
            {text:"36 states", correct: false,},
            {text:"37 states", correct: false,},       
        ]
    },
];

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
        currentQuestionIndex = 0
        score = 0;
        nextBtn.innerHTML = "NEXT QUESTION"
        showQuestion();
        }
        function showQuestion(){

        }




        let currentQuestion = quizQuestion[currentQuestionIndex];
        let questionNo =currentQuestionIndex +1;
        questionElement.innerHTML = questionNo + "." + currentQuestion.question;

        currentQuestion.answers,array.forEach(answers => {
            const button = document.createElement("button");
            button.classList.add("btn");
            answerBtn.appendChild(button);
            if (answers.correct){
                button.dataset.correct=answers.correct
            }
            button.addEventListener("click", selectAnswer);

        });
    