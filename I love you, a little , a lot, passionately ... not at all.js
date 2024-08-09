function howMuchILoveYou(nbPetals) {
    // your code
  const phrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ];

    // Calculate the index in the phrases array
    const phraseIndex = (nbPetals - 1) % phrases.length;

    // Return the phrase corresponding to the index
    return phrases[phraseIndex];
}