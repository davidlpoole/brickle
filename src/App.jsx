import React, { useState } from 'react'
import trashIcon from './assets/trash.svg' // Importing the SVG file

function ScriptDisplay(props) {
  const { script } = props
  return (
    <>
      <div>Script:</div>
      <div id="scriptDisplay">{script.toUpperCase()}</div>
    </>
  )
}

function ResultDisplay(props) {
  const { result, target } = props

  const isCorrect = (index) => {
    return result[index] === target[index]
  }

  return (
    <>
      <div>Result:</div>
      <div>
        {result.split('').map((char, i) => (
          <span
            className={`mx-0.5 px-1 py-0.5 bg-gray-700 font-mono rounded ${
              isCorrect(i) ? 'text-green-200 bg-green-900' : ''
            }`}
            key={i}
          >
            {char}
          </span>
        ))}
      </div>
    </>
  )
}

function App() {
  const [script, setScript] = useState('')
  const [initialWord, setInitialWord] = useState('tlibcheaomkpnr')
  const [targetWord, setTargetWord] = useState('bricklehampton')

  const run = (script, word) => {
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

  const updateDisplay = () => {
    const result = run(script, initialWord)
    document.title = result
    return result
  }

  const handleButtonClick = (char) => {
    setScript((prevScript) => prevScript + char)
  }

  const handleBackspace = () => {
    setScript((prevScript) => prevScript.slice(0, -1))
  }

  const handleReset = () => {
    setScript('')
  }

  const handleInitialWordChange = (e) => {
    setInitialWord(e.target.value)
  }

  const handleTargetWordChange = (e) => {
    setScript('')
    const newTargetWord = e.target.value.replace(/[^a-zA-Z]/g, '') // Remove non-alphabetical characters
    setTargetWord(newTargetWord)
    setInitialWord(shuffleWord(newTargetWord))
  }

  function shuffleWord(word) {
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

  return (
    <div className="bg-gray-900 text-white max-w-md mx-auto mt-6 p-6 rounded-lg shadow-md">
      <div>
        <div>
          <div id="explanation" className="bg-gray-800 p-4 rounded-md mb-2">
            <p>
              <strong>Instructions:</strong>
            </p>
            <ul>
              <li className="mb-2">
                Find a value for &apos;script&apos; so that the
                &apos;result&apos; equals &apos;{targetWord}&apos;
              </li>

              <li>&apos;L&apos; moves the first character to the end,</li>
              <li>&apos;R&apos; moves the last character to the start,</li>
              <li>&apos;!&apos; reverses the first four characters.</li>
            </ul>
          </div>
          <div className="flex items-center justify-center mt-4 mb-4">
            <button
              className="w-12 h-12 bg-gray-700 text-white rounded-md mr-4 hover:bg-gray-800 hover:scale-110 hover:shadow-md"
              onClick={() => handleButtonClick('l')}
            >
              L
            </button>
            <button
              className="w-12 h-12 bg-gray-700 text-white rounded-md mr-4 hover:bg-gray-800 hover:scale-110 hover:shadow-md"
              onClick={() => handleButtonClick('r')}
            >
              R
            </button>
            <button
              className="w-12 h-12 bg-gray-700 text-white rounded-md mr-4 hover:bg-gray-800 hover:scale-110 hover:shadow-md"
              onClick={() => handleButtonClick('!')}
            >
              !
            </button>
            <button
              title="Backspace"
              className={`w-12 h-12 bg-gray-700 text-white rounded-md hover:bg-gray-800 mr-4 hover:scale-110 hover:shadow-md ${
                script.length === 0
                  ? 'opacity-50 cursor-not-allowed hover:scale-100'
                  : ''
              }`}
              onClick={handleBackspace}
              disabled={script.length === 0}
            >
              ⌫
            </button>
            <button
              title="Reset Script"
              className={`flex justify-center items-center w-12 h-12 bg-gray-700 text-white rounded-md hover:bg-gray-800  hover:scale-110 hover:shadow-md ${
                script.length === 0
                  ? 'opacity-50 cursor-not-allowed hover:scale-100'
                  : ''
              }`}
              onClick={handleReset}
              disabled={script.length === 0}
            >
              <img src={trashIcon} alt="Reset" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div>
          <ScriptDisplay script={script} />
          <ResultDisplay result={updateDisplay()} target={targetWord} />
        </div>

        <div className="mt-6">
          <label htmlFor="initialWordInput">Initial word: </label>
          <input
            type="text"
            id="initialWordInput"
            value={initialWord}
            onChange={handleInitialWordChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md mt-4 mb-4"
          />
        </div>

        <div>
          <label htmlFor="initialWordInput">Target word: </label>
          <input
            type="text"
            id="targetWordInput"
            value={targetWord}
            onChange={handleTargetWordChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md mt-4 mb-4"
          />
        </div>
      </div>
    </div>
  )
}

export default App
