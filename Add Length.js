function addLength(str) {
    //start-here
      let words = str.split(' ');
    
      // Map each word to a new string that includes the word and its length
      let wordsWithLengths = words.map(word => `${word} ${word.length}`);
    
      // Return the array of words with lengths
      return wordsWithLengths;
    }
    