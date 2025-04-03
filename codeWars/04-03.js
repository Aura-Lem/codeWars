function getPlanetName(id){
    if (id === 1){
      return 'Mercury';
      } if (id === 2) {
        return 'Venus';
       } if (id === 3) {
         return'Earth';
        } if (id === 4) {
          return 'Mars';
         } if (id === 5) {
           return 'Jupiter';
          } if (id === 6) {
           return 'Saturn';
            } if (id === 7) {
              return 'Uranus';
              } if (id === 8) {  
                 } return 'Neptune';
    }


    function correctPolishLetters (string) {
        let PolishNames = string;
        let newLetters = PolishNames.replaceAll('ą', 'a').replaceAll('ć', 'c').replaceAll('ę', 'e').replaceAll('ł', 'l').replaceAll('ń', 'n').replaceAll('ó', 'o').replaceAll('ś', 's').replaceAll('ź', 'z').replaceAll('ż', 'z');
        
        return '' + newLetters;
      }
      
      correctPolishLetters("Jędrzej Błądziński");
      correctPolishLetters("Lech Wałęsa");
      correctPolishLetters("Maria Skłodowska-Curie");