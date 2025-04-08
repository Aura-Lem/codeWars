const areaOrPerimeter = function(l , w) {
    if (l === w) {
      return l * w;
    } else {
      return 2 * (l + w);
    }
}


function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true;
    }  else {
      return false;
    }
}

function feast(beast, dish) {
    if (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]) {
      return true;
    } else {
      return false;
    }
}

function addFive(num) {
    var total = num + 5;
    return total;
}

function ifChuckSaysSo(){
    return !true;
}

function Dog (breed) {
    this.breed = breed;
  }
  
  var snoopy = new Dog("Beagle");
  
  snoopy.bark = function() {
    return "Woof";
  };
  
  var scoobydoo = new Dog("Great Dane");
  
  scoobydoo.bark = function() {
    return "Woof";
};