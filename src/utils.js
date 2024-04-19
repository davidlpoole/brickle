export function run(script, word) {
  // https://gist.github.com/gerardpaapu/1bdf3eca8307b8be0bfa617a8b16266b
  return script.split('').reduce((word, i) => {
    switch (i) {
      case 'l':
        return word.slice(1) + word[0]
      case 'r':
        return word.slice(-1) + word.slice(0, -1)
      case '!':
        return word[3] + word[2] + word[1] + word[0] + word.slice(4)
      default:
        return word
    }
  }, word)
}

export function shuffleWord(word) {
  // Convert word to an array of characters
  const wordArray = word.split('')
  // Shuffle the array using Fisher-Yates algorithm
  for (let i = wordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
  }
  // Join the shuffled characters back into a string
  return wordArray.join('')
}
