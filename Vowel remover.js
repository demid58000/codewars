function shortcut (string) {
    const vowels = /[aeiou]/g;

  // Replace all vowels with an empty string
  const result = string.replace(vowels, '');

  // Return the result
  return result;
}