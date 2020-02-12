window.onload = function() {
    var startButton = document.getElementById("#start-btn");
    var questionContEl = document.getElementById("#question-container");
    var questionEl = document.getElementById("question");
    var answerEl = document.getElementById("answer-buttons");
    var nextButton = document.getElementById("#next-btn");
    var timer = document.getElementById("#time");

    startButton.addEventListener('click', startQuiz);

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
        choice1: "a. Plumbbobs",
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

    }];

    function startQuiz() {
    console.log("Started");
    startButton.classList.add("hide");
    questionContEl.classList.remove("hide");
    currentQuestionIndex = 0;
    }

    function currentQuestion(simsQuestions) {
    questionEl.innerText = simsQuestions.q1
    simsQuestions.a.forEach(a => {
        var button = document.createElement("button");
        button.innerText = a.text;
        button.classList.add("btn");
        if (userAnswer === a) {
            button.setAttribute("style", "background-color:green");
            button.addEventListener("click", selectAnswer);
            answerEl.appendChild(button);
        }
        else {
            button.setAttribute("style", "background-color:red");
            nextQuestion();
        }

        }
    )};

    function resetQuestion() {
        nextButton.classList.add("hide");
        while (answerEl.firstChild) {
            answerEl.removeChild(answerEl);
        }
    }

    function selectAnswer(e) {
        var userSelect = e.target;
        var correctAnswer = userSelect.dataset.a;
        setStatus(document.body, correctAnswer);
        Array.from(answerEl.children).forEach(button => {
            setStatus(button, button.dataset.a);
        })
    }

    function setStatus(element, a) {
        clearStatus(element);
        if(userAnswer === a) {

        }}


    function quizTime() {
    var timerInterval = setInterval(function() {
        countdown--;
        timer.textContent = "Time: " + countdown;
            if(countdown === 0) {
            clearInterval(timerInterval);
            sendMessage();

    }
    }, 6000);
    };

    ("#high-scores").localStorage.setitem(score);
    ("#high-scores").localStorage.getItem(score);
    
};
