export default function ResultDisplay(props) {
  const { result, target } = props

  const isCorrect = (index) => {
    return result[index] === target[index]
  }

  const isIncorrect = (char, word) => {
    return !word.includes(char)
  }

  return (
    <>
      <div>Result:</div>
      <div>
        {result.split('').map((char, i) => (
          <span
            className={`mx-0.5 px-1 py-0.5 bg-gray-700 font-mono rounded 
            ${isCorrect(i) ? 'text-green-200 bg-green-900' : ''}
            ${isIncorrect(char, target) ? 'text-red-200 bg-red-900' : ''}`}
            key={i}
          >
            {char}
          </span>
        ))}
      </div>
    </>
  )
}
