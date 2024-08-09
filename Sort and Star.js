function twoSort(s) {
    const sortedArray = s.sort();
      
      // Get the first string from the sorted array
      const firstString = sortedArray[0];
      
      // Insert '***' between each character of the first string
      const formattedString = firstString.split('').join('***');
      
      return formattedString;
  }