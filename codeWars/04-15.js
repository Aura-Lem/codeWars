function quote(fighter) {
    let winner = fighter.toLowerCase();
    if (winner === 'george saint pierre') {
      return "I am not impressed by your performance.";
    } else if (winner === 'conor mcgregor') {
      return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
    }
}

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if (name === "Santa Claus" && password === "Ho Ho Ho!") {
    return true;
  } else {
    return false;
  }
}

function getASCII(c){
    return c.charCodeAt(0);
}

function combineNames(name, lastName) {
    return name + ' ' + lastName;
}

function main(verb, noun) {
    return verb + noun;
}

function shortenToDate(longDate) {
  
    return longDate.split(',')[0];
}

function findSmallestInt(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    return min;
}

function getChar(c){
    return String.fromCharCode(c);
}

function booleanToString(b){
    return b + '';
}