//define variables

var playing = false; // at the begining of the game we're not playing
var score;
var action;
var timeremaining;
var correctAnswer;
var answers = [correctAnswer];

//click on the start/reset

document.getElementById("startreset").onclick = function () {
    if (playing == true) {
        //check if playing
        location.reload(); //yes playing so reload the page-> reset the game
    } else {
        //not playing start the game
        score = 0;
        playing = true; // now we're playing
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
        timeremaining = 60; //the begining tme
        hide("gameover");
        document.getElementById("timeremainingvalue").innerHTML = timeremaining; // countdown the timer
        document.getElementById("startreset").innerHTML = "Reset Game"; //start button changed to reset button

        startCountdown();

        //we need to generate some questions and answers
        generateQA();
    }
};

//check the answers after clicking on the options

for (i = 1; i < 5; i++) {
    document.getElementById("option" + i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correctAnswer) {
                //the answer is correct
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                show("correct");
                hide("wrong");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                generateQA(); //so we need a new question
            } else {
                // the answer is wrong
                show("wrong");
                hide("correct");
                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }
        }
    };
}

//functions
//

//start counter

function startCountdown() {
    action = setInterval(function () {
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0) {
            //end of the game
            stopCountdown(); //stop timer
            show("gameover"); // show game over box
            document.getElementById("gameover").innerHTML = "<p>game over!</p><p>your score is " + score + " .</p>";
            hide("timeremaining"); //hide timer box
            hide("correct"); //hide answer box
            hide("wrong"); // hide answer box
            playing = false; // now we are not playing
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

//stop counter

function stopCountdown() {
    clearInterval(action);
}

//hide certain elements

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

//show certain elements

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

//generate new questions and answers

function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + "X" + y;
    var correctposition = 1 + Math.round(3 * Math.random());
    document.getElementById("option" + correctposition).innerHTML = correctAnswer; //fill one randombox with the correct answer

    //fill other boxes with random wrong answers

    for (i = 1; i < 5; i++) {
        if (i != correctposition) {
            var wrongAnswer;

            do {
                //to avoide repetition of answers
                wrongAnswer = 1 + Math.round(100 * Math.random()); //generate random wrong answers
            } while (answers.indexOf(wrongAnswer) > -1);
            document.getElementById("option" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
} //end of function generateQA

//clicking on answer boxes
