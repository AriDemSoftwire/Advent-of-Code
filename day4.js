const fs = require('fs');
const input = fs.readFileSync('C:/Users/MSIG/Desktop/work/Softwire/AoC_2022/day4/day4_input.txt', {encoding:'utf8'});
const array = input.split(/\n/);
console.log(array.length);

let counter = 0;

for (let i = 0; i < array.length; i++) {
    let blocks = array[i].split(',');
    let block1 = blocks[0];
    let block2 = blocks[1];
    let block1Start = parseInt(block1.split('-')[0]);
    let block1End = parseInt(block1.split('-')[1]);
    let block2Start = parseInt(block2.split('-')[0]);
    let block2End = parseInt(block2.split('-')[1]);
    let assignment1 = [];
    let assignment2 = [];
    for (let j = block1Start; j <= block1End; j++) {
        assignment1.push(j);
    }
    for (let j = block2Start; j <= block2End; j++) {
        assignment2.push(j);
    }

    const filteredArray = assignment1.filter(value => assignment2.includes(value));
    if (filteredArray.length > 0) {
        counter++;
    }
}

console.log(counter);