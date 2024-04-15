//alert("Benvenuto in Simon Game")
let userClickedPattern = []
let gamePattern = []
let buttonColours = ["red", "blue", "yellow", "green"]
let level = 0;
let started = false;

//Start Game
$(document).keypress(function (e) { 
    if(!started) {
        $("h1").html("Level " + level);
        nextSequence();
        started = true;
    }
});

//Button Clickato 
$(".btn").on("click", function() {
    let userChosenColour = $(this).attr("id"); //e.id non funziona
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    playSound(userChosenColour);
    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length - 1)
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000)
        }
    
    } else {
        console.log("error");
    } 

    
}
 
//Game Sequence
function nextSequence(){
    userClickedPattern = [];

    level++;
    $("h1").html("Level " + level);
    let randomNumber = (Math.floor(Math.random() * 4));
    console.log(randomNumber);

    let randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour)
    console.log(gamePattern);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
}


//Suono
function playSound(ClickuserColor){
    var audio = new Audio("sounds/" + ClickuserColor + ".mp3");
    audio.play();
}

//Animazione
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100)
}

