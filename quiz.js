var questions=[
    {
        title: '?',
        choices: ["?", "?", "?", "?"],
        answer: "?"
    },
    
]
var time=60;
var timerId;

var timerEl=document.getElementById("time");
var startButton=document.getElementById("start");


function startQuiz(){
    timerId=setInterval(clockTick, 1000);
    timerEl.textContent=time;
}
function clockTick(){
    time--;
    timerEl.textContent=time;
    if (time<=0){
        return;
    }
}
startButton.onclick=startQuiz
