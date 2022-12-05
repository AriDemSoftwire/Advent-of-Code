const { readFileSync, promises: fsPromises } = require("fs");
const contents = readFileSync("./input_day1.txt", "utf-8");

let input = [];
let sums = [];
input = contents.split(/\n\s*\n/);

for (let i in input) {
    let element = input[i].split(/\n/);
    let elementSum = 0;

    for (let i = 0; i < element.length; i++) {
        elementSum += parseInt(element[i]);
    }

    sums.push(elementSum);
}
sums.sort((a, b) => b - a);
console.log(sums);
