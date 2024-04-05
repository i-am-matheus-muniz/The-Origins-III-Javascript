let stoneColor = document.querySelector(".stone")
let randomNumber = Math.floor(Math.random() * 9) + 1;

if (randomNumber == 1) {
    stoneColor.style.backgroundColor = "#ff0000";
} else if (randomNumber == 2) {
    stoneColor.style.backgroundColor = "#ffa500";
} else if (randomNumber == 3) {
    stoneColor.style.backgroundColor = "#ffff00";
} else if (randomNumber == 4) {
    stoneColor.style.backgroundColor = "#008000";
} else if (randomNumber == 5) {
    stoneColor.style.backgroundColor = "#0000ff";
} else if (randomNumber == 6) {
    stoneColor.style.backgroundColor = "#4169e1";
} else if (randomNumber == 7) {
    stoneColor.style.backgroundColor = "#00008b";
} else if (randomNumber == 8) {
    stoneColor.style.backgroundColor = "#800080";
} else {
    stoneColor.style.backgroundColor = "#000000";
}