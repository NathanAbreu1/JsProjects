const quizData = [
  {
    question : 'How Old is Nate ?',
    a : '18',
    b : '21',
    c : '42',
    d : '107',
    correct : 'a',
  },{
    question : 'What is the most used programming language? in 2023',
    a : 'Java',
    b : 'C',
    c : 'Python',
    d : 'JavaScript',
    correct : 'a',
  },{
    question : 'Who is the current president of the US?',
    a : 'Barack Obama',
    b : 'Donald Trump',
    c : 'Joe Biden',
    d : 'Jair Bolsonaro',
    correct : 'c',
  },{
    question : 'What does HTML stands for?',
    a : 'Hyper Super Fast Connection',
    b : 'Hyper Text Markup Language',
    c : 'Super Speed Markup Language',
    d : 'Hyper Mega Speed Language',
    correct : 'b',
  },{
    question : 'What year was javascript Launched?',
    a : '1996',
    b : '1992',
    c : '1993',
    d : 'none',
    correct : 'd',
  }
]

const quiz = document.getElementById("quiz");
const answersEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

}

function getSelected(){

  let answer = undefined;

  answersEl.forEach((answerEl) => {

    if(answerEl.checked){
      answer = answerEl.id;
    }
    
  })

  return answer;
}

function deselectAnswers(){

  answersEl.forEach((answerEl) => {
    answerEl.checked = false;
  })

}

submit.addEventListener('click', () => {

  let answer = getSelected();

  console.log(answer)

  if(answer){

    if(answer == quizData[currentQuiz].correct){

      score++;

    }

    currentQuiz++;

    if(currentQuiz < quizData.length){

      loadQuiz();
    
    }else{
    
    quiz.innerHTML = `<h3>You answered correctly at ${score}\ out of ${quizData.length}</h3>`
      
    }
  
    loadQuiz();
  

  }
  }
    )
