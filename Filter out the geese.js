function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
    // Return a new array excluding the geese
    return birds.filter(bird => !geese.includes(bird));
    
    // return an array containing all of the strings in the input array except those that match strings in geese
  };