//alert("Benvenuto in Simon Game")
let userClickedPattern = []
let gamePattern = []
let buttonColours = ["red", "blue", "yellow", "green"]

function nextSequence(){
    let randomNumber = (Math.floor(Math.random() * 4));
    console.log(randomNumber);

    let randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour)
    console.log(gamePattern);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   

    $(".btn").on("click", function() {
        let userChosenColour = $(this).attr("id"); //e.id non funziona
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
        playSound(userChosenColour);
    })

    playSound(randomChosenColour)
}

nextSequence();

function playSound(ClickuserColor){
    var audio = new Audio("sounds/" + ClickuserColor + ".mp3");
    audio.play();
}

