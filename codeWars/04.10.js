function saleHotdogs(n){
    if (n < 5) {
      return n * 100;
    } else if ( n >= 5 && n < 10) {
      return n * 95;
    } else {
      return n * 90;
    }
}

function repeatStr (n, s) {
    return s.repeat(n);
}

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}