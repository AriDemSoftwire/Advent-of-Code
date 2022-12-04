const fs = require('fs');

class Priority {
    constructor (letter, value) {
        this.letter = letter;
        this.value = value;
    }
}

const input = fs.readFileSync('C:/Users/MSIG/Desktop/work/Softwire/AoC_2022/day3/day3_input.txt', {encoding:'utf8'});
const array = input.split(/\n/);

let lowAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
'y', 'z']
let uppAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z']
let priorities = [];
for (let i = 0; i < 27; i++) {
    priorities[i] = new Priority(lowAlph[i], i + 1)
    } 
let x = 0;
for (let i = 27; i < 53; i++) {
    priorities[i] = new Priority(uppAlph[x], i)
    x++;
    }

let items = [];
let intersections = [];

for (let i = 0; i < array.length; i++) {
    let elf1 = array[i].split("");
    let elf2 = array[i + 1].split("");
    let elf3 = array[i + 2].split("");
    //const item = half1.filter(element => half2.includes(element));
    let intersection1 = elf1.filter(element => elf2.includes(element));
    let intersection2 = elf1.filter(element => elf3.includes(element));
    let intersection3 = elf2.filter(element => elf3.includes(element));

    let arrayOfInts = [intersection1, intersection2, intersection3];

    int = arrayOfInts.reduce((p,c) => p.filter(e => c.includes(e)));
    i += 2;
    int.length = 1;

    //console.log(int);
    //items.push(item[0]);
    intersections.push(int[0]);
}

let finalSum = 0;
for (let i = 0; i < intersections.length; i++) {
    for (let j = 0; j < 53; j++) {
        if (priorities[j].letter === intersections[i]) {
            finalSum += priorities[j].value;
            continue;
        }
    }
}

console.log(finalSum);
