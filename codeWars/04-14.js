function sakuraFall(v) {
    if (v <= 0){
      return 0;
    } else {
      return 400 / v;
    }
}

function combat(health, damage) {
    if (health < damage) {
      return 0;
    } else {
      return health - damage;
    }
}

function weatherInfo (temperature) {
    var c = (temperature - 32) * (5/9);
    if (c > 0) {
      return (c + " is above freezing temperature")
    } else {
      return (c + " is freezing temperature")
    }
}

function chromosomeCheck(sperm) {
    if (sperm === 'XY') {
      return "Congratulations! You're going to have a son."; 
    } else {
      return "Congratulations! You're going to have a daughter.";
    }
}

function sumStr(a,b) {
    const c = parseInt(a);
   const d = parseInt(b);
   if (a === "" && b === "") {
     return 0 + "";
   } else if (a === "") {
     return d + "";
   } else if (b === "") {
     return c + "";
   } else {
     return c + d + "";
   }
}

function leo(oscar){
    if (oscar === 88) {
      return "Leo finally won the oscar! Leo is happy";
    } else if (oscar === 86) {
      return "Not even for Wolf of wallstreet?!";
    } else if (oscar < 88) {
      return "When will you give Leo an Oscar?";
    } else if (oscar > 88) {
      return "Leo got one already!";
    }
} 

class Ship {
    constructor(draft, crew) {
      this.draft = draft
      this.crew = crew
      
    }
     isWorthIt() {
       if (this.draft - (this.crew * 1.5) > 20) {
           return true;
           } else {
         return false;
       }
     }
  
    
}

function DNAtoRNA(dna) {
    if (dna.includes('T')) {
      return dna.replaceAll('T', "U");
    } else {
      return dna;
    }
}
  