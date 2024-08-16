function capitalizeWord(word) {
    const firstCharUpper = word.charAt(0).toUpperCase();
      // Get the rest of the string
      const restOfString = word.slice(1);
      // Concatenate and return the final string
      return firstCharUpper + restOfString;
  }