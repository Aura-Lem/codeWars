// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
const reverseSeq = n => {
    let list = [];
    list.push(n);
    for (let i = n; i > 1; i--) {
      list.push(n -= 1);
    }
    return list;
}

// https://www.codewars.com/kata/5977618080ef220766000022
function usdcny(usd) {
    let cny = usd * 6.75;
    return cny.toFixed(2) + ' Chinese Yuan';
}

usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;

function usdcny2(usd) {
    let con = usd * 6.75
    return `${con.toFixed(2)} Chinese Yuan`
}

//https://www.codewars.com/kata/577bd026df78c19bca0002c0
function correct(string)
{
	return string.replaceAll(0, 'O').replaceAll(5, 'S').replaceAll(1, 'I');
}

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S');

const corrections = {
	'5': 'S',
	'0': 'O',
  '1': 'I',
};

const correct2 = string => (
	string.replace(/[501]/g, character => corrections[character])
);

//https://www.codewars.com/kata/51f9d93b4095e0a7200001b8
function howManyLightsabersDoYouOwn(name) {
    if (name === 'Zach') {
      return 18;
    } else {
    return 0;
      }
}

function howManyLightsabersDoYouOwn2(name) {
    return name === 'Zach' ? 18 : 0;
}

//https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
function hoopCount (n) {
    if (n >= 10) {
      return "Great, now move on to tricks";
    } else if (n < 10) {
      return "Keep at it until you get it";
    }
}

function hoopCount2 (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}