function solution(str){
    let reversed = str.split('').reverse().join('');
    return reversed;
  }



  let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1(){
let a = v1,   
    b = v1;   
return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
let a = v3 , //set number value to a
    b = v1; //set number value to b
return a - b;
}

function equal3(){
let a = v1 , //set number value to a
    b = v5 ; //set number value to b
return a * b;
}

function equal4(){
let a = v4 , //set number value to a
    b = v5 ; //set number value to b
return a / b;
}

function equal5(){
let a = v2 , //set number value to a
    b = v6 ; //set number value to b
return a % b;
}



function greet (name, owner) {
    if (name === owner) {
      return 'Hello boss'; 
    } else {
      return 'Hello guest';
    }
  }

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      let volume = length * width * height;
      return volume;
    }
  }

  function stringClean(s){
    let newText = s.replaceAll(0, '').replaceAll(1, '').replaceAll(2, '').replaceAll(3, '').replaceAll(4, '').replaceAll(5, '').replaceAll(6, '').replaceAll(7, '').replaceAll(8, '').replaceAll(9, '');
    return newText;
  }

  function getSize(width, height, depth) {
    let list = [];
    let surface = 2 * (width * height + width * depth + height * depth);
    let volume = width * height * depth;
    list.push(surface, volume);
    return list;
  }
  

  function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}