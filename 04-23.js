// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
    if (queue[queue.length -1] === 'wolf') {
      return 'Pls go away and stop eating my sheep';
      } else {
       let index = queue.findIndex( (x) => x == 'wolf' );
       return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
      }
}

function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}


// https://www.codewars.com/kata/56a946cd7bd95ccab2000055
function lowercaseCount(str) {
    return (str.match(/[a-z]/g) || []).length;
}

function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}

function lowercaseCount(str){
    let count=0
    let lowercase="abcdefghijklmnopqrstuvwxyz";
     for(let i=0;i<str.length;i++){
       for(let j=0;j<lowercase.length;j++){
         if(str[i]===lowercase[j]){count++}
       }
     }
    return count
}


// https://www.codewars.com/kata/5ce399e0047a45001c853c2b
function partsSums(ls) {
    let result = [0]
    for(const n in ls.reverse()){
      result.push(ls[n]+result[n]);
    }
    return result.reverse()
}

function partsSums(ls) {
    let r = [0];
    for(let i in ls.reverse()){
     r.push(ls[i]+r[i]);
    }
    return r.reverse();
}

function partsSums(ls) {
    var result = [];
    result.push(ls.reduce((a, b) => a + b, 0));
    for ( i = 0; i < ls.length; i++){
        result.push((result[result.length-1]) - ls[i] );
    };
    return result
}


// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
function sumOfMinimums(arr) {
    let output = 0;
    for (let i=0; i<arr.length; i++) {
      output += Math.min(...arr[i]);
    }
    return output;
}

// https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19
class Person {
    constructor(firstName,lastName,age,gender){
      this.firstName = firstName || "John";
      this.lastName = lastName || "Doe";
      this.age = age || 0;
      this.gender = gender || "Male";
    }
    sayFullName(){
      return `${ this.firstName } ${ this.lastName }`;
    }
    static greetExtraTerrestrials(raceName){
      return `Welcome to Planet Earth ${ raceName }`;
    }
}

class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
      Object.assign(this, { firstName, lastName, age, gender });
    }
    sayFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth ${raceName}`;
    }
}