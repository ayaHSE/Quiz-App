const questions=[
    {
        question: "Where is Alwand bridge?",
        answers:[
            {text:"Halabja", correct: false},
            {text:"Kalar", correct: false},
            {text:"Khanaqen", correct: true},
            {text:"Darnadekhan", correct: false},
 
                
            
        ]
    },
    {
        question: "Where is Sherwana Castle?",
        answers:[
            {text:"kerkuk", correct: false},
            {text:"zakho", correct: false},
            {text:"Koya", correct: false},
            {text:"kalar", correct: true},

                
            
        ] 
    },
    {
        question: "Who is the first Kurdish poet  ever known?",
        answers:[
            {text:"baba tahir hamadane", correct: true},
            {text:"mahwi", correct: false},
            {text:"mala gawra", correct: false},
            {text:"shekh raza", correct: false},

                
            
        ]
    },
    {
        question: "who wrote kurdish grammar?",
        answers:[
            {text:"ismail Shawaran", correct: false},
            {text:"Ali Taramakhi", correct: true},
            {text:"Hiwa Asaad", correct: false},
            {text:"Kamaran Mukreani", correct: false},

                
            
        ]  
    }
];
const questionElement = document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){

    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
let currentQuestion= questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML= questionNo +". "+currentQuestion.question;


currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML =answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click", selectAnswer);

});
}
function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
        nextButton.style.display = "block";
    })
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    

    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";


}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();