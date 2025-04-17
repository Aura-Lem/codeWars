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
    sum.push(marks[i] * i * marks.length);                   // 10 * 0, 2 * 10, 8 * 2....
}

console.log(sum);

const sum2 = marks.map((item, index, arr) => item * index * arr.length);
console.log(sum2);

// https://www.codewars.com/kata/51c8991dee245d7ddf00000e
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}

function reverseWords(str){
    var reverse = [];
    var words = str.split(" ");
    for(let i=words.length-1; i>=0; i--){
      reverse.push(words[i]);
      
    }
    return reverse.join(" ")
}

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === 'needle') {
        return `found the needle at position ${i}`;
      }
    }
}

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

// https://www.codewars.com/kata/53dc23c68a0c93699800041d
function smash (words) {
    return words.join(' ');
}
  

// https://www.codewars.com/kata/5963c18ecb97be020b0000a2
function derive(coefficient,exponent) {
    return (coefficient * exponent) + 'x^' + (exponent - 1);
}

function derive(coefficient,exponent) {
    return `${coefficient*exponent}x^${exponent-1}`
}

// https://www.codewars.com/kata/563e320cee5dddcf77000158
function getAverage(marks){
    sum = 0;
    for (i = 0; i < marks.length; i++) {
      sum += (marks[i] / marks.length);
    }
    return Math.floor(sum);
}

function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

// https://www.codewars.com/kata/527b3cd0492b6b15250060af
items = []
items.push({a: "b", c: "d"});


// https://www.codewars.com/kata/572059afc2f4612825000d8a
function howManydays(month){
    let days;
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        days = 31;
        break;
        case 4:
        case 6:
        case 9:
        case 11:
        days = 30;
        break;
        case 2:
        days = 28;
        break;     
    }
    return days;
}

function howManydays(month){
    switch (month){
       case 2: return 28
       case 4:
       case 6:
       case 9:
       case 11: return 30
    }
    return 31
}

// https://www.codewars.com/kata/544675c6f971f7399a000e79
const stringToNumber = function(str){
    
    return str - '';
}

var stringToNumber1 = function(str){
    return parseInt(str);
}

var stringToNumber2 = function(str){
    return Number(str);
}

var stringToNumber = function(str){
    return +str;
}