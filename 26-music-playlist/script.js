const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
];

musicPlaylist.shift();
musicPlaylist.pop();
musicPlaylist.push("Shoot to Thrill");
musicPlaylist.unshift("Thunderstruck", "Highway to Hell");

console.log(musicPlaylist);