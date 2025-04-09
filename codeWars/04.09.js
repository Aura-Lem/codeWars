function validateCode (code) {
    let code1 = code.toString();
       if (code1.startsWith(1) || code1.startsWith(2) || code1.startsWith(3)) {
         return true;
       } else {
         return false;
       }
}

function cubeChecker(volume, side){
    if (side <= 0 || volume <= 0) {
      return false;
    } if (side === volume / (side * side)) {
      return true;
    } else { 
      return false;
  }
}

const rps = (p1, p2) => {
    if (p1 === p2) {
      return "Draw!";
    } if (p1 === 'rock' && p2 === 'scissors' || p1 == 'scissors' && p2 === "paper" || p1 === "paper" && p2 === 'rock') {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
}



function differenceInAges(ages) {
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < min) {
            min = ages[i];
        }
        if (ages[i] > max) {
            max = ages[i];
        }
    }
  let dif = max - min;
  return [min, max, dif];

}

function litres(time) {
    return Math.floor(time * 0.5);
}

function magNumber(info) {
    
    if (info[0] === 'PT92') {
       return  Math.ceil((3 * info[1])/17);
    } if (info[0] === 'M4A1' || info[0] === "M16A2") {
        return Math.ceil((3 * info[1])/30);
     } if (info[0] === 'PSG1') {
        return Math.ceil((3 * info[1])/5);
     }
     
}

function bmi(weight, height) {
    let result = '';
    if (weight / (height**2) <= 18.5) {
        result = 'Underweight';
    } else if (weight / (height**2) <= 25) {
        result = 'Normal';
    } else if (weight / (height**2) <= 30) {
        result = 'Overweight';
    } else {
        result = 'Obese';
    }
    return result;
}

function peopleWithAgeDrink(old) {
    if (old  < 14) {
        return "drink toddy";
    } else if (old < 18) {
        return "drink coke";
    } else if (old < 21) {
        return "drink beer";
    } else {
        return "drink whisky";
    }
}


function square(num) {
    return num * num;
}


function grader(score) {
    if (score > 1 || score < 0.6) {
    return 'F';
  } else if (score >= 0.9) {
    return 'A';
  } else if (score >= 0.8) {
    return 'B';
  } else if (score >= 0.7) {
    return 'C';
  } else if (score >= 0.6) {
    return 'D';
  } 
}

function getGrade (s1, s2, s3) {
    let result = (s1 + s2 + s3)/3;
    if (90 <= result) {
      return 'A';
    } else if (80 <= result) {
      return 'B';
    } else if (70 <= result) {
      return 'C';
    } else if (60 <= result) {
      return 'D';
    } else if (0 <= result) {
      return 'F';
    }
}

function nameShuffler(str){
    return `${str.split(' ')[1]} ${str.split(' ')[0]}`;
}

function reverseList(list) {
    return list.reverse();
}

function doubleChar(str) {
    let newS = "";
    for (let i = 0; i < str.length; i++) {
      newS += str[i] + str[i];
    } return newS;
}

function setAlarm(employed, vacation){
    if ((employed === true && vacation === true) || (employed === false)) {
      return false;
    } else if (employed === true && vacation === false) {
      return true;
    }
}