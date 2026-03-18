const question=[
    {
        question:"What is the capital of India?",
        answers:[
            {text:"New Delhi",correct:true},
            {text:"Mumbai",correct:false},
            {text:"Chennai",correct:false},
            {text:"Kolkata",correct:false}, 
        ]
    },
    {
        question:"Which planet is known as the Red Planet?",
        answers:[
            {text:"Earth",correct:false},   
            {text:"Mars",correct:true},
            {text:"Jupiter",correct:false},
            {text:"Saturn",correct:false}, 
        ]
    },
    {
        question:"Who wrote 'Romeo and Juliet'?",
        answers:[
            {text:"William Shakespeare",correct:true},          
            {text:"Charles Dickens",correct:false},
            {text:"Mark Twain",correct:false},
            {text:"Jane Austen",correct:false}, 
        ]
    },
    {
        question:"What is the largest ocean on Earth?",
        answers:[
            {text:"Atlantic Ocean",correct:false},      
            {text:"Indian Ocean",correct:false},
            {text:"Arctic Ocean",correct:false},
            {text:"Pacific Ocean",correct:true}, 
        ]
    }
]
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();

    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        // IMPORTANT FIX
        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // show correct answer
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < question.length ){
        handleNextButton();
    } else {
        startQuiz();
    }       
});


startQuiz();