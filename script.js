const num1 = Math.ceil(Math.random()*20);
const num2 = Math.ceil(Math.random()*10);

const ques = document.getElementById("question") ;

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");

const scoreEl= document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}

scoreEl.innerText = `score: ${score}`
ques.innerText = `What is ${num1} multiply  by ${num2}?`

const correectAns = num1*num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns===correectAns){
        score++
        updateLocalStorage();
    }
    else{
        score--
        updateLocalStorage();

    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
