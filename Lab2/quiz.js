const questions=[
    {
        question: "Which is the largest animal in the world?",
        answers:[
            { text:"Shark", correct:false},
            { text:"Blue Whale", correct:true},
            { text:"Giraffe", correct:false},
            { text:"Elephant", correct:false},
            
        ]
    },
    {
        question: "Which is the longest river in India?",
        answers:[
            { text:"Ganga", correct:true},
            { text:"Yamuna", correct:false},
            { text:"Bramhaputra", correct:false},
            { text:"Nile", correct:false},
            
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers:[
            { text:"Kalhari", correct:false},
            { text:"Antarctica", correct:false},
            { text:"Sahara", correct:true},
            { text:"Gobi", correct:false},
            
        ]
    },
    {
        question: "Which is the snmallest continent in the world?",
        answers:[
            { text:"Asia", correct:false},
            { text:"Australia", correct:true},
            { text:"Africa", correct:false},
            { text:"Europe", correct:false},
            
        ]
    },
    {
        question: "Which is the highest peak in the world?",
        answers:[
            { text:"Karakoram", correct:false},
            { text:"Kanchenjunga", correct:true},
            { text:"K2", correct:false},
            { text:"Mount Everest", correct:true}
            
        ]
    }
]
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
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
     let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.question;


     currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
   });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("inorrect");
    }
    Array.from(answerButton.children).forEach(button => {

        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
        
    });
   nextButton.style.display="block";
 }
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}



 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
 }



 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
 });

startQuiz();