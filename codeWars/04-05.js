function past(h, m, s){
    let a = h * 3600000;
    let b = m * 60000;
    let c = s * 1000;
    return a + b + c;
  } 