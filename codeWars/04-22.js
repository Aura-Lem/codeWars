// https://www.codewars.com/kata/580a094553bd9ec5d800007d
function apple(x){
    if (x**2 > 1000) {
      return "It's hotter than the sun!!"
    } else {
      return "Help yourself to a honeycomb Yorkie for the glovebox."
    }
}


// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
function cockroachSpeed(s) {
    let s1 = s * 100000 / 3600;
    return Math.floor(s1) - '';
}

const cockroachSpeed = s => Math.floor(s / 0.036);
