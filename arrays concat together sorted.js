function mergeArrays(arr1, arr2) {
    let combinedArray = arr1.concat(arr2);
      
      // Step 2: Sort the combined array in ascending order
      combinedArray.sort((a, b) => a - b);
      
      // Step 3: Remove duplicates
      let sortedUniqueArray = [...new Set(combinedArray)];
      
      return sortedUniqueArray;
  }