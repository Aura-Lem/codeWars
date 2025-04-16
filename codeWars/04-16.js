// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
const reverseSeq = n => {
    let list = [];
    list.push(n);
    for (let i = n; i > 1; i--) {
      list.push(n -= 1);
    }
    return list;
}