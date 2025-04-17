// https://www.codewars.com/kata/555a67db74814aa4ee0001b5

function testEven(n) {
    return n % 2 === 0;
}

function testEven(n){
    return !(n % 2);
}

// https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter) {
    let count = 0;
    for (const s of str) {
      if (s === letter) {
        count++
      }
    }
    return count;
}

function strCount(str, letter){  
    return str.split(letter).length-1
}
  
function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
}

const strCount = (str, letter) =>  
    --str.split(letter).length;

function strCount(str, letter) { 
    let count = 0;
    
    [...str].forEach(char => char == letter ? count++ : count);
    
    return count;
}

function strCount(str, l){ 
    var a = str.split('').map(x => x.replace(l,'')).join('');
     return str.length- a.length;
}

// https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= fuelLeft * mpg;
};

// https://www.codewars.com/kata/59ca8246d751df55cc00014c
function hero(bullets, dragons){
    return bullets >= dragons * 2;
}

// https://www.codewars.com/kata/568dc014440f03b13900001d
ution
1
function getDrinkByProfession(param){
    const pro = param.toLowerCase();
    if (pro === 'jabroni') {
      return 'Patron Tequila';
    } if (pro === 'school counselor') {
      return 'Anything with Alcohol';
    } if (pro === 'programmer') {
      return 'Hipster Craft Beer';
    } if (pro === 'bike gang member') {
      return 'Moonshine';
    } if (pro === 'politician') {
      return 'Your tax dollars';
    } if (pro === 'rapper') {
      return 'Cristal';
    } 
return 'Beer';
}

const drinks = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
}
  
const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"

function getDrinkByProfession(param) {
    param = param.toLowerCase()
    var professions = ["jabroni", "school counselor", "programmer", "bike gang member", "politician", "rapper"];
    var drinks = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal","Beer"];
   
    for (var i = 0; i < professions.length; i++) {
        if (param == professions[i]) {
            return drinks[i];
        }
    } 
    return drinks[drinks.length-1];
}

// https://www.codewars.com/kata/5704aea738428f4d30000914

function tripleTrouble(one, two, three){
    let ats = '';
    for (let i = 0; i < one.length; i++) {
      ats += one[i] + two[i] + three[i];
    }
  return ats;
}

function tripleTrouble(one, two, three) {
    var result = "";
    for (let i = 0; i < one.length; i++) {
      result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
}

const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");
 
const marks = [10, 2, 8, 4, 6];

let sum = [];
for (let i = 0; i < marks.length; i++) {
    sum.push(marks[i] * i);                   // 10 * 0, 2 * 10, 8 * 2....
}

console.log(sum);

const sum2 = marks.map((item, index, arr) => item * index * arr.length);
console.log(sum2);