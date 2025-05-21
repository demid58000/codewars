function sumArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0 || arr.length <= 1) {
      return 0;
    }
  
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const maxIndex = sortedArr.length - 1;
    const minIndex = 0;
  
    let sum = 0;
    for (let i = 0; i < sortedArr.length; i++) {
      if (i !== maxIndex && i !== minIndex) {
        sum += sortedArr[i];
      }
    }
  
    return sum;
  }