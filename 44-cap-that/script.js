const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
    "Hey baby, wanna play some league of legends? I'm a Malphite player, you know...",
    "You'll only spend money, if you go out with that money.",
    "So... is he?",
    "When your mate tells that he'll ace the enemy team by himself, but ends dead as you've said he would."
];

let randomMeme = document.getElementById("random-meme");
let randomCaption = document.getElementById("random-caption");
let memeGenerator = document.getElementById("generator-button");

memeGenerator.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * memeArray.length);
    randomMeme.setAttribute("src", memeArray[randomIndex]);
    randomCaption.textContent = captionsArray[randomIndex];
})