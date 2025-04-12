function mouthSize(animal) {
    if (animal.toLowerCase() === 'alligator') {
      return 'small';
    } else {
      return 'wide';
    }
}

function giveMeFive(obj){
    const list = [];
    for (const key in obj) {
      if (key.length === 5) {
        list.push(key);
      } if (obj[key].length === 5) {
        list.push(obj[key]);
      }
    }
    return list;
}

function getMax1() {
    let max = 
    {
     name: 'Max Headroom'
    }
    return max;
  }
  
  function getMax2() {
    let max2 =
    {
      name: 'Max Headroom'
    }
    return max2;
}
  