export function run(script, word, difficulty) {
  // https://gist.github.com/gerardpaapu/1bdf3eca8307b8be0bfa617a8b16266b
  // with added difficulty option
  return script.split('').reduce((word, i) => {
    switch (i) {
      case 'l':
        return word.slice(1) + word[0]
      case 'r':
        return word.slice(-1) + word.slice(0, -1)
      case '!':
        {
          switch (difficulty) {
            case 1:
              return word[1] + word[0] + word.slice(2)
            case 2:
              return word[2] + word[1] + word[0] + word.slice(3)
            case 3:
              return word[3] + word[2] + word[1] + word[0] + word.slice(4)
          }
        }
        break
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
