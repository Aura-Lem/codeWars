// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(x){
    const names = x.split(' ');
    let initials = '';
    for (let i = 0; i < names.length; i++) {
      if (names[i].length > 0 && names[i] !== '') {
        initials += names[i][0];
        
      }
    }
    
   return initials.toUpperCase().split('').join('.');

}

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name){

    const [firstName, lastName] = name.split(' ')
    const firstInitial = firstName.charAt(0).toUpperCase()
    const secondInitial = lastName.charAt(0).toUpperCase()
    return firstInitial + '.' + secondInitial

}

const abbrevName = name =>
    name
      .split` `
      .map(part => part[0].toUpperCase())
      .join('.')


// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
function removeEveryOther(arr){
    let list = [];
    for (let i = 0; i < arr.length; i += 2) {
        list.push(arr[i]);
    }
    return list;
}

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
}


// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
    return Math.floor((year-1)/100) + 1;
}

function century(year) {
    var century = 0;
    
    for(var i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
}