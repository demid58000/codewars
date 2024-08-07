function enough(cap, on, wait) {
    // your code here
    let result = cap - on - wait;
    if (result >= 0) {
      return 0;
    } else {
      return Math.abs(result)
    }
  }