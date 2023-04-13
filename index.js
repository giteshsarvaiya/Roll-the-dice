var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var imgNew1 = "images/" + "dice" + randomNumber1 +".png"
document.querySelectorAll("img")[0].setAttribute("src",imgNew1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgNew2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imgNew2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}