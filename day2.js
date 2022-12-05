const { readFileSync, promises: fsPromises } = require("fs");
const contents = readFileSync("./input_day2.txt", "utf-8");

class Turn {
    constructor(turn, value) {
        this.turn = turn;
        this.value = value;
    }
}

// A Rock
// B Paper
// C Scissors
// X Lose
// Y Tie
// Z Win

let oppValues = [new Turn("A", 1), new Turn("B", 2), new Turn("C", 3)];
let myValues = [new Turn("X", 1), new Turn("Y", 2), new Turn("Z", 3)];
let input = [];
let score = 0;

input = contents.split(/\n\s*/);

for (let i = 0; i < input.length; i++) {
    let turns = [];
    turns = input[i].split(" ");
    let oppTurn = turns[0].trim();
    let myTurn = turns[1].trim();
    let oppIndex;
    let myIndex;

    for (let v = 0; v < myValues.length; v++) {
        if (myTurn === myValues[v].turn) {
            myIndex = myValues.indexOf(myValues[v]);
        }
    }
    for (let v = 0; v < oppValues.length; v++) {
        if (oppTurn === oppValues[v].turn) {
            oppIndex = oppValues.indexOf(oppValues[v]);
        }
    }

    if (myTurn === "Y") {
        score += 3;
        // console.log(score);
        score += oppValues[oppIndex].value;
        // console.log(score);
    }
    if (myTurn === "X") {
        if (oppTurn === "A") {
            score += 3;
            // console.log(score);
        }
        if (oppTurn === "B") {
            score += 1;
            // console.log(score);
        }
        if (oppTurn === "C") {
            score += 2;
            //console.log(score);
        }
    }
    if (myTurn === "Z") {
        score += 6;
        if (oppTurn === "A") {
            score += 2;
            // console.log(score);
        }
        if (oppTurn === "B") {
            score += 3;
            // console.log(score);
        }
        if (oppTurn === "C") {
            score += 1;
            // console.log(score);
        }
    }

    console.log();
}
console.log(score);
