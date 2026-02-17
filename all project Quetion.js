var questionH = document.getElementById("question");
var formH = document.getElementById("form");
var userH = document.getElementById("user");
var scoreH = document.getElementById("scor");


var score=JSON.parse(localStorage.getItem("score"))


function generateQuestion(){
      num1 = Math.ceil(Math.random() * 10);
    num2 = Math.ceil(Math.random() * 10);
    correctAns = num1 * num2;
    questionH.innerText = `What is ${num1} multiply by ${num2}?`;
    scoreH.innerText=`Score:${score}`;
} 
generateQuestion()

formH.addEventListener("submit", ()=>{
    var userAns=+userH.value;
    if(userAns===correctAns){
        score++;
    }
    else{
        score--;
    }
    generateQuestion()
    local()
})


function local(){
    localStorage.setItem("score", JSON.stringify(score))
}