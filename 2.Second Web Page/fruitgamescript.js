var playing = false; //in the begining we are not playing
var score;
var trialsleft;
var fruits = ["8531", "8532", "8535", "8536", "8537", "8538", "12999", "24328", "27364", "174097", "267379"];
var step;
var action;

$(function () {
    //we write all code in this function to make sure that it would be run whenever everything in the page is ready
    //clicking on the start reset button
    $("#startreset").click(function () {
        if (playing == true) {
            // we are playing
            location.reload(); // just reload the page
        } else {
            // not playing
            playing = true; // now we are playing
            score = 0; // set the score to zero
            $("#scorevalue").html(score);
            $("#trialsleft").show();
            trialsleft = 3; // in the begining we are three trial left
            addHeart();
            $("#startreset").html("Reset Game"); // and the button changes to reset
            startAction();
        }
    });

    $("#fruit1").mouseover(function () {
        score++;
        $("#scorevalue").html(score);
        clearInterval(action);
        $("#fruit1").hide("explode", 500);
        setTimeout(startAction, 1000);
    });

    //functions

    //function to add heart to trial
    function addHeart() {
        $("#trialsleft").empty();
        for (i = 0; i < trialsleft; i++) {
            $("#trialsleft").append('<img class="life" src="image/heart.png "> ');
        }
    }

    //function to start the game
    function startAction() {
        $("#gameover").hide();
        $("#fruit1").show();
        chooseFruit();
        $("#fruit1").css({ left: Math.round(550 * Math.random()), top: -50 });
        step = 1 + Math.round(5 * Math.random()); // set step to 5 px
        action = setInterval(function () {
            //show fruits going down
            $("#fruit1").css("top", $("#fruit1").position().top + step); //fruits are going down
            if ($("#fruit1").position().top > $("#fruitContainer").height()) {
                //fruit touches the bottom of the container
                if (trialsleft > 1) {
                    $("#fruit1").show(); //still have chance to continue the game
                    chooseFruit(); //show new fruits
                    $("#fruit1").css({ left: Math.round(550 * Math.random()), top: -50 }); //set random position for fruits
                    step = 1 + Math.round(5 * Math.random()); // set each step to 5 px
                    trialsleft--; //fruit touched the ground so player shold loose one heart
                    addHeart(); // box of trials should be set again but with one heart less
                } else {
                    //fruit touched the ground and there is no heart left so the game is over
                    //Game Over
                    playing = false; //no more playing
                    $("#startreset").html("Start Game"); //start bottom should be reset
                    $("#gameover").show(); //game over box is shown
                    $("#gameover").html("<p>Game Over!</p> <p>Your score is " + score + ".</p>");
                    $("#trialsleft").hide(); //no more trials box
                    stopAction(); //no more new fruits
                }
            }
        }, 10); // each 10 ms fruit takes 5 px
    }

    //function to randomly chose fruit
    function chooseFruit() {
        $("#fruit1").attr("src", "image/" + fruits[Math.round(10 * Math.random())] + ".png");
    }

    //function to stop the game
    function stopAction() {
        clearInterval(action);
        $("#fruit1").hide();
    }
});
