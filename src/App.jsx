import { useEffect, useState } from 'react'
import run from './libs/run'
import ScriptDisplay from './components/ScriptDisplay'
import ResultDisplay from './components/ResultDisplay'
import trashIcon from './assets/trash.svg'
import { useSearchParams } from 'react-router-dom'
import GameConfig from './components/GameConfig'

function App() {
  const [script, setScript] = useState('')
  const [initialWord, setInitialWord] = useState('')
  const [targetWord, setTargetWord] = useState('')

  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const initial = searchParams.get('initial')
    const target = searchParams.get('target')
    const script = searchParams.get('script')

    initial
      ? setInitialWord(initial.toLowerCase())
      : setInitialWord('tlibcheaomkpnr')
    target
      ? setTargetWord(target.toLowerCase())
      : setTargetWord('bricklehampton')
    script ? setScript(script.toLowerCase()) : setScript('')
  }, [searchParams])

  const updateDisplay = () => {
    const result = run(script, initialWord)
    document.title = result
    return result
  }

  const handleButtonClick = (char) => {
    const newScript = script + char
    setScript(newScript)
    setSearchParams({
      initial: initialWord,
      target: targetWord,
      script: newScript,
    })
  }

  const handleBackspace = () => {
    const newScript = script.slice(0, -1)
    setScript(newScript)
    setSearchParams({
      initial: initialWord,
      target: targetWord,
      script: newScript,
    })
  }

  const handleReset = () => {
    setScript('')
    setSearchParams({ initial: initialWord, target: targetWord, script: '' })
  }

  const handleInitialWordChange = (e) => {
    setInitialWord(e.target.value.toLowerCase().replace(/[^a-z]/g, ''))
    setSearchParams({ initial: e.target.value, target: targetWord, script: '' })
  }

  const handleTargetWordChange = (e) => {
    setScript('')
    const newTargetWord = e.target.value.toLowerCase().replace(/[^a-z]/g, '') // Remove non-alphabetical characters
    setTargetWord(newTargetWord)
    const newInitialWord = shuffleWord(newTargetWord)
    setInitialWord(newInitialWord)
    setSearchParams({
      initial: newInitialWord,
      target: newTargetWord,
      script: '',
    })
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
    <>
      <div className="bg-gray-900 text-white max-w-md mx-auto mt-6 p-4 rounded-lg shadow-md">
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
                className="w-12 h-12 bg-gray-700 text-white rounded-md mr-4 hover:bg-gray-600 hover:scale-110 hover:shadow-md"
                onClick={() => handleButtonClick('l')}
              >
                L
              </button>
              <button
                className="w-12 h-12 bg-gray-700 text-white rounded-md mr-4 hover:bg-gray-600 hover:scale-110 hover:shadow-md"
                onClick={() => handleButtonClick('r')}
              >
                R
              </button>
              <button
                className="w-12 h-12 bg-gray-700 text-white rounded-md mr-4 hover:bg-gray-600 hover:scale-110 hover:shadow-md"
                onClick={() => handleButtonClick('!')}
              >
                !
              </button>
              <button
                title="Backspace"
                className={`w-12 h-12 bg-gray-700 text-white rounded-md hover:bg-gray-600 mr-4 hover:scale-110 hover:shadow-md ${
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
                className={`flex justify-center items-center w-12 h-12 bg-gray-700 text-white rounded-md hover:bg-gray-600  hover:scale-110 hover:shadow-md ${
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
        </div>
      </div>
      <GameConfig
        initialWord={initialWord}
        handleInitialWordChange={handleInitialWordChange}
        targetWord={targetWord}
        handleTargetWordChange={handleTargetWordChange}
      />
    </>
  )
}

export default App
