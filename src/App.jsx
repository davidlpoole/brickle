import React, { useState } from 'react'

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
    setTargetWord(e.target.value)
  }

  return (
    <div className="bg-gray-900 text-white max-w-md mx-auto mt-6 p-6 rounded-lg shadow-md">
      <div>
        <div>
          <div>
            What is a value for script so that the result equals &apos;
            {targetWord}&apos;?
          </div>

          <div className="flex items-center mt-4 mb-4">
            <button
              className="w-12 h-12 bg-gray-700 text-white rounded-md mr-4 hover:bg-gray-800"
              onClick={() => handleButtonClick('l')}
            >
              L
            </button>
            <button
              className="w-12 h-12 bg-gray-700 text-white rounded-md mr-4 hover:bg-gray-800"
              onClick={() => handleButtonClick('r')}
            >
              R
            </button>
            <button
              className="w-12 h-12 bg-gray-700 text-white rounded-md mr-4 hover:bg-gray-800"
              onClick={() => handleButtonClick('!')}
            >
              !
            </button>
            <button
              title="Backspace"
              className={`w-12 h-12 bg-gray-700 text-white rounded-md hover:bg-gray-800 mr-4 ${
                script.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleBackspace}
              disabled={script.length === 0}
            >
              ⌫
            </button>
            <button
              title="Reset Script"
              className={`w-12 h-12 bg-gray-700 text-white rounded-md hover:bg-gray-800 ${
                script.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleReset}
              disabled={script.length === 0}
            >
              x
            </button>
          </div>
        </div>
        <div>
          <p>
            Script: <span id="scriptDisplay">{script.toUpperCase()}</span>
          </p>
          <p>
            Result: <span id="resultDisplay">{updateDisplay()}</span>
          </p>
        </div>
        <div id="explanation" className="bg-gray-800 p-4 rounded-md mt-8">
          <p>
            <strong>Instructions:</strong>
          </p>
          <ul>
            <li>&apos;L&apos; moves the first character to the end,</li>
            <li>&apos;R&apos; moves the last character to the start,</li>
            <li>&apos;!&apos; reverses the first four characters.</li>
          </ul>
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
