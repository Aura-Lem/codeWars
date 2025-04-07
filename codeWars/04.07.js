function opposite(number) {
    if (number > 0 ) {
      return -number;
    } if (number < 0) {
      return number * -1;
    } if (number === 0) {
      return 0;
    }
  }



  function rainAmount(mm){
    if (mm < 40) {
         return `You need to give your plant ${40 - mm}mm of water`;
    } else if (mm >= 40) {
         return "Your plant has had more than enough water for today!";
    }
}

function boolToWord(bool){
    if (bool === true) {
      return 'Yes';
    } if (bool === false) {
      return 'No';
    }
}

function capitalizeWord(word) {
    newWord = word[0].toUpperCase() + word.slice(1);
   return newWord;
}


function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
}


function pickIt(arr){
    let odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
    
    
    return [odd,even];
}

function include(arr, item){
    if (arr.includes(item)) {
      return true;
    } else {
      return false;
    }
    
}


const square = number => number ** 2;