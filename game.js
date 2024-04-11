//alert("Benvenuto in Simon Game")

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

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    $(".btn").on("click", function() {
        let userChosenColour = $(this).attr("id"); //e.id non funziona
        console.log(userChosenColour);
    })
    
}

nextSequence();

