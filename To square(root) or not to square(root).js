function squareOrSquareRoot(array) {
    return array.map(num => {
          const sqrt = Math.sqrt(num);
          return Math.floor(sqrt) === sqrt ? sqrt : Math.pow(num, 2);
      });  
  }