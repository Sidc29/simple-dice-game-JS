//FOR DICE 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageSource1 = "images/dice" +randomNumber1+ ".png";

var diceRoll1 = document.querySelectorAll("img")[0]

diceRoll1.setAttribute("src", imageSource1);

//FOR DICE 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "images/dice" +randomNumber2+ ".png";

var diceRoll2 = document.querySelectorAll("img")[1]

diceRoll2.setAttribute("src", imageSource2);

//CHECKING WHO'S THE WINNER AMONG THE TWO PLAYERS

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉PLAYER 1 WINS!🎉";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎉PLAYER 2 WINS!🎉";
} else {
    document.querySelector("h1").innerHTML = "😐DRAW😐";
}

//BUTTON TO RELOAD THE PAGE

document.querySelector("button").addEventListener("click", function() {
    window.location.reload();
})