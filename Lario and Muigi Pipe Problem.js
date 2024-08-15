function pipeFix(numbers){
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
  
    // Create a new array with values incrementing by 1 from min to max
    const fixedPipes = [];
    for (let i = min; i <= max; i++) {
      fixedPipes.push(i);
    }
  
    return fixedPipes;
  }