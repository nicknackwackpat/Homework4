var startButton = document.getElementById("#start");
var timer = document.getElementById("#time");
 
 var simsQuestions = [{ 
    q1: "In what year was The Sims first released?",
    choice1: "a. 1999",
    choice2: "b. 2000",
    choice3: "c. 2001",
    choice4: "d. 2002",
    a: "b"

 }, {
     question2: "In The Sims 2, who was the last person to see Bella Goth alive?",
     choice1: "a. Daniel Pleasant",
     choice2: "b. Dina Caliente",
     choice3: "c. Dina Caliente",
     choice4: "d. Don Lothario",
     a: "d"

 }, {
     question3: "What's the name of the diamond that appears above The Sims characters' heads?",
     choice1: "a. lumbbobs",
     choice2: "b. Plumbjobs",
     choice3: "c. Bobplums",
     choice4: "d. They don't have a name",
     a: "a"
}, {
     question4: "In The Sims 3 and The Sims 4, what is the unique and powerful single-serving meal often used to resurrect deceased Sims?",
     choice1: "a. Mac & Cheese",
     choice2: "b. Grilled Cheese",
     choice3: "c. Lifefruit",
     choice4: "d. Ambrosia",
     a: "d"

 }, {
    question5: "Which family was used as the tutorial family upon loading the first Sims game?",
    choice1: "a. Pleasant family",
    choice2: "b. Newbie family",
    choice3: "c. Landgraab family",
    choice4: "d. Goth family",
    a: "b"

 }]

var countdown = 60;
var score = 0;

    function startQuiz() {
    var timerInterval = setInterval(function() {
    countdown--;
    timer.textContent = "Time: " + countdown;
        if(countdown === 0) {
        clearInterval(timerInterval);
        sendMessage();

}
}, 6000);
};

for(i = 0; i < simsQuestions.length; i++) {
    var userAnswer = window.confirm(simsQuestions[i]);
    if(userAnswer === simsQuestions[i].a) {
        score++;
        countdown++;
        alert("CORRECT ANSWER");
    } else {
        score--;
        countdown--;
        alert("INCORRECT ANSWER");
    }

    }

function sendMessage() {
    alert("TIME IS UP!")
}


 var start = startButton.addEventListener('click', startQuiz);
 startQuiz();
