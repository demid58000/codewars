var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let result = [];
    let catYears = 0;
    let dogYears = 0;
    for (let i = 1; i <= humanYears; i++) {
      if (i <= 1) {
        catYears += 15;
      } else if (i <= 2 && i > 1) {
        catYears += 9;
      } else {
        catYears += 4;
      }
    }
    
    for (let i = 1; i <= humanYears; i++) {
      if (i <= 1) {
        dogYears += 15;
      } else if (i <= 2 && i > 1) {
        dogYears += 9;
      }
      else {
        dogYears += 5;
      }
    }
    result.push(humanYears)
    result.push(catYears)
    result.push(dogYears)
    return result;
  }
  