function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const sentences = sentence.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
      if (sentences.indexOf(alphabet[i]) === -1) {
        return false;
      }
    }
    return true;
  }
  console.log(isPangram('The quick brown fox jumps over the lazy dog'));
  console.log(isPangram('I like cats, but not mice'));

  // Runtime = O(n)