function position(letter){
    //Write your own Code!
      let lowerLetter = letter.toLowerCase();
        
        // Calculate the position: 'a' is at position 1, so we subtract the char code of 'a' from the char code of the letter, then add 1
        let position = lowerLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        
        // Formulate the output string
        return `Position of alphabet: ${position}`;
    }