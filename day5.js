let array1 = ["Z", "J", "G"];
let array2 = ["Q", "L", "R", "P", "W", "F", "V", "C"];
let array3 = ["F", "P", "M", "C", "L", "G", "R"];
let array4 = ["L", "F", "B", "W", "P", "H", "M"];
let array5 = ["G", "C", "F", "S", "V", "Q"];
let array6 = ["W", "H", "J", "Z", "M", "Q", "T", "L"];
let array7 = ["H", "F", "S", "B", "V"];
let array8 = ["F", "J", "Z", "S"];
let array9 = ["M", "C", "D", "P", "F", "H", "B", "T"];

const { readFileSync, promises: fsPromises } = require("fs");
const contents = readFileSync("./day5_input.txt", "utf-8");
const lines = contents.split(/\n/);
const commands = [];
for (let i = 0; i < lines.length; i++) {
    let numbers = lines[i]
        .replace("move ", "")
        .replace(" from ", ",")
        .replace(" to ", ",");
    let arrOfCommands = numbers.split(",");
    commands.push(arrOfCommands);
}

let arrayOfArrays = [
    array1,
    array2,
    array3,
    array4,
    array5,
    array6,
    array7,
    array8,
    array9,
];

// for (let i = 0; i < commands.length; i++) {
//     let amount = commands[i][0];
//     let initialArrayIndex = commands[i][1] - 1;
//     let finalArrayIndex = commands[i][2] - 1;
//     for (j = 0; j < amount; j++) {
//         let element = arrayOfArrays[initialArrayIndex].pop();
//         arrayOfArrays[finalArrayIndex].push(element);
//     }
// }

for (let i = 0; i < commands.length; i++) {
    let amount = commands[i][0];
    let initialArrayIndex = commands[i][1] - 1;
    let finalArrayIndex = commands[i][2] - 1;
    let elements = arrayOfArrays[initialArrayIndex].slice(
        arrayOfArrays[initialArrayIndex].length - amount,
        arrayOfArrays[initialArrayIndex].length
    );
    arrayOfArrays[initialArrayIndex].splice(
        arrayOfArrays[initialArrayIndex].length - amount,
        amount
    );
    let newArray = arrayOfArrays[finalArrayIndex].concat(elements);
    arrayOfArrays.splice(finalArrayIndex, 1, newArray);
}

for (let i in arrayOfArrays) {
    console.log(arrayOfArrays[i]);
}
