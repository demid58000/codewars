function well(x){
    let goodCount = 0;
  
    // Iterate over each idea in the array
    for (let i = 0; i < x.length; i++) {
      // Increment the counter if the idea is 'good'
      if (x[i] === 'good') {
        goodCount++;
      }
    }
  
    // Return the appropriate message based on the count of good ideas
    if (goodCount === 0) {
      return 'Fail!';
    } else if (goodCount <= 2) {
      return 'Publish!';
    } else {
      return 'I smell a series!';
    }
  }