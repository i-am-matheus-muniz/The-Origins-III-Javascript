const dnaPieces = ["A", "C", "G", "T"];
let myDNA = [];

for (let i = 0; i < 24; i++) {
    let dnaSequence = "";
    for(let counter = 0; counter < 3; counter++) {
        dnaSequence += dnaPieces[(Math.floor(Math.random() * 4))];
    }
    myDNA.push(dnaSequence);
}

console.log(myDNA);