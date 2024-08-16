function remove (string) {
    //coding and coding....
    if (string.endsWith("!")) {
          // If it is, return the string without the last character
          return string.slice(0, -1);
      }
      // Otherwise, return the original string
      return string;
  }