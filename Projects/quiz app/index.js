// main.js or main.ts

import 'tailwindcss/tailwind.css';

// Your other JavaScript/TypeScript code goes here
const quizData = {
    question1: {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
      correctAnswer: 'Paris'
    },
    question2: {
      question: 'Which programming language is this quiz written in?',
      options: ['Java', 'Python', 'JavaScript', 'C++'],
      correctAnswer: 'JavaScript'
    },
    question3: {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      correctAnswer: 'Jupiter'
    },
    question4: {
      question: 'Who is known as the father of modern physics?',
      options: ['Isaac Newton', 'Niels Bohr', 'Galileo Galilei', 'Albert Einstein'],
      correctAnswer: 'Albert Einstein'
    },
    question5: {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Japan', 'South Korea', 'Vietnam'],
      correctAnswer: 'Japan'
    },
    question6: {
      question: 'What is the currency of Brazil?',
      options: ['Peso', 'Real', 'Rupiah', 'Baht'],
      correctAnswer: 'Real'
    },
    question7: {
      question: 'Which ocean is the largest?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Pacific Ocean'],
      correctAnswer: 'Pacific Ocean'
    },
    question8: {
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      correctAnswer: 'Canberra'
    },
    question9: {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 'William Shakespeare'
    },
    question10: {
      question: 'What is the main ingredient in guacamole?',
      options: ['Tomato', 'Avocado', 'Onion', 'Cilantro'],
      correctAnswer: 'Avocado'
    }
};


let currentQuestionIndex=0;
let score =0;
let q = document.getElementById("que"); 
let o1=document.getElementById("option1");
let o2= document.getElementById("option2");
let o3=document.getElementById("option3");
let o4=document.getElementById("option4");
o1.addEventListener("click",()=>{check(o1.innerHTML,o1)});
    o2.addEventListener("click",()=>{check(o2.innerHTML,o2)});
    o3.addEventListener("click",()=>{check(o3.innerHTML,o3)});
    o4.addEventListener("click",()=>{check(o4.innerHTML,o4)});
const next=document.getElementById("nxtBtn");
let ans=document.getElementById('output');
function check(e,opt){
    console.log("check chalra hai");
    // console.log(e);
    let currentQuestion=(Object.values(quizData)[currentQuestionIndex-1]);
    // console.log(Object.values(currentQuestion));
    
    if(e===Object.values(currentQuestion)[2]){
        opt.classList.add("correct");
        score+=1;
        console.log(score);
        ans.innerHTML='Correct answer';
        console.log(ans.textContent);
    }
    else{
        opt.classList.add("wrong");
        console.log(score);
        ans.innerHTML='Wrong Answer, Correct Answer is '+ Object.values(currentQuestion)[2];
    }
}
function loadQuestion(){
    o1.classList.remove("correct");
    o2.classList.remove("correct");
    o3.classList.remove("correct");
    o4.classList.remove("correct");
    o4.classList.remove("wrong");
    o3.classList.remove("wrong");
    o2.classList.remove("wrong");
    o1.classList.remove("wrong");
    ans.innerHTML = "";
    let currentQuestion=(Object.values(quizData)[currentQuestionIndex]);
    q.innerHTML=Object.values(currentQuestion)[0];
    o1.innerHTML=Object.values(currentQuestion)[1][0];
    
    o2.innerHTML=Object.values(currentQuestion)[1][1];
    o3.innerHTML=Object.values(currentQuestion)[1][2];
    o4.innerHTML=Object.values(currentQuestion)[1][3];
    console.log(next.innerHTML);
    currentQuestionIndex++;
    if(currentQuestionIndex == 9){
        next.innerHTML="SUBMIT";
    }
    if(currentQuestionIndex==10){
        currentQuestionIndex=0;
        alert("Game Over! Your score is "+score);
        location.reload();
    }
}
window.onload=function(){
    console.log("hi");
    loadQuestion();
}


next.addEventListener("click",loadQuestion);
