function expressionMatter(a, b, c) {
    let results = [];
  
      // List every possible expression
      results.push(a + b + c);       // a + b + c
      results.push(a * b * c);       // a * b * c
      results.push(a * (b + c));     // a * (b + c)
      results.push((a + b) * c);     // (a + b) * c
      results.push(a + b * c);       // a + (b * c)
      results.push((a * b) + c);     // (a * b) + c
  
      // Return the maximum value from the results array
      return Math.max(...results);
  }