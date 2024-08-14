function findMultiples(integer, limit) {
    //your code here
    let multiples = [];
      
      // Начинаем с самого малейшего кратного и увеличиваем до лимита
      for (let i = integer; i <= limit; i += integer) {
          multiples.push(i);
      }
  
      return multiples;
  }
  