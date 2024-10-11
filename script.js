// set questions
const questions = [
    {
        question : "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string?",
        answers: [
          {text:"strip()" , correct: false},
          {text:"stripped()" , correct: false},
          {text:"trim()" , correct: true},
          {text:"trimmed()" , correct: false},
        ]
    },
    {
        question : "Where is the correct place to insert a JavaScript?",
        answers: [
          {text:"The <head> section" , correct: false},
          {text:"Both the <head> section and the <body> section are correct " , correct: true},
          {text:"The <body> section" , correct: false},
          {text:"anywhere" , correct: false},
        ]
  },
  {
        question : "How do you round the number 7.25, to the nearest integer?",
        answers: [
          {text:"Math.round(7.25)  " , correct: true},
          {text:"round(7.25)" , correct: false},
          {text:"rnd(7.25)" , correct: false},
          {text:"Math.rnd(7.25)" , correct: false},
        ]
  },
  {
        question : "Which event occurs when the user clicks on an HTML element?",
        answers: [
          {text:"onmouseclick" , correct: false},
          {text:"onclick " , correct: true},
          {text:"onmouseover",correct: false},
          {text:"onchange" , correct: false},
        ]
  },
  {
    question : " Which of the following is a valid type of function javascript supports?",
    answers: [
      {text:"named function" , correct: false},
      {text:"Both of the above." , correct: true},
      {text:"anonymous function",correct: false},
      {text:"None of the above" , correct: false},
    ]
},
{
  question : "Which of the following function of Array object adds and/or removes elements from an array?",
  answers: [
    {text:"toSource()" , correct: false},
    {text:" sort()" , correct: false},
    {text:"unshift()",correct: false},
    {text:"splice()" , correct: true},
  ]
},
{
  question : "Which of the following function of String object creates an HTML anchor that is used as a hypertext target?",
  answers: [
    {text:"link()" , correct: false},
    {text:"blink()" , correct: false},
    {text:"anchor()",correct: true},
    {text:"concat()" , correct: false},
  ]
},
{
  question : "Which of the following function of String object combines the text of two strings and returns a new string?",
  answers: [
    {text:"concat()" , correct: true},
    {text:"append()" , correct: false},
    {text:"add()",correct: false},
    {text:"merge()" , correct: false},
  ]
},
{
  question : "Which of the following is an advantage of using JavaScript?",
  answers: [
    {text:" Less server interaction" , correct: false},
    {text:"All of the above." , correct: true},
    {text:" Immediate feedback to the visitors",correct: false},
    {text:"Increased interactivity" , correct: false},
  ]
},
{
  question : "Which of the following is not a reserved word in JavaScript?",
  answers: [
    {text:"interface" , correct: false},
    {text:"program" , correct: true},
    {text:"throws",correct: false},
    {text:"short" , correct: false},
  ]
},
  
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

// to store question index and score

let currQuestionIndex=0;
let score=0;

function startQuiz(){
  currQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
}

function showQuestion(){
  //reset prev ques and answer
  resetState();

  let currQuestion = questions[currQuestionIndex];
  let questionNo=currQuestionIndex +1;
  questionElement.innerHTML=questionNo + ". "+ currQuestion.question;

  //to get answwers

  currQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });
}

function resetState(){
       nextButton.style.display="none";
       while(answerButtons.firstChild){
         answerButtons.removeChild(answerButtons.firstChild);
       }
}

function selectAnswer(e){
  const selectedBtn=e.target;
  const isCorrect = selectedBtn.dataset.correct ==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display="block";
}

function showScore(){
  resetState();
  questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML="play Again";
  nextButton.style.display="block";
}

function handleNextButton(){
  currQuestionIndex++;
  if(currQuestionIndex <questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextButton.addEventListener("click",()=> {
  if(currQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
})

startQuiz();