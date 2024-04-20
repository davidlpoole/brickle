import PropTypes from 'prop-types'
import { shuffleWord } from '../utils'
import { useState } from 'react'

GameConfig.propTypes = {
  initialWord: PropTypes.string.isRequired,
  targetWord: PropTypes.string.isRequired,
  setInitialWord: PropTypes.func.isRequired,
  setTargetWord: PropTypes.func.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  setScript: PropTypes.func.isRequired,
  difficulty: PropTypes.number.isRequired,
  setDifficulty: PropTypes.func.isRequired,
}

export default function GameConfig(props) {
  const {
    initialWord,
    targetWord,
    setInitialWord,
    setTargetWord,
    setSearchParams,
    setScript,
    difficulty,
    setDifficulty,
  } = props

  const [hidden, setHidden] = useState(true)

  const difficultyText = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard',
  }

  const handleInitialWordChange = (e) => {
    setInitialWord(e.target.value.toLowerCase().replace(/[^a-z]/g, ''))
    setSearchParams({ initial: e.target.value, target: targetWord, script: '' })
  }

  const handleTargetWordChange = (e) => {
    setScript('')
    const newTargetWord = e.target.value.toLowerCase().replace(/[^a-z]/g, '')
    setTargetWord(newTargetWord)
    const newInitialWord = shuffleWord(newTargetWord)
    setInitialWord(newInitialWord)
    setSearchParams({
      initial: newInitialWord,
      target: newTargetWord,
      script: '',
    })
  }

  return (
    <div
      id="config"
      className="bg-gray-900 text-zinc-400 max-w-md mx-auto mt-4 p-4 rounded-lg shadow-md"
    >
      <button className="font-bold" onClick={() => setHidden(!hidden)}>
        {hidden ? 'Show' : 'Hide'} Game Config
      </button>

      <div className={`${hidden ? 'hidden' : 'mt-2'}`}>
        <div>
          <label htmlFor="targetWordInput">Target word: </label>
          <input
            type="text"
            id="targetWordInput"
            value={targetWord}
            onChange={handleTargetWordChange}
            className="w-full px-4 py-2 bg-gray-700 text-zinc-300 rounded-md mt-2 mb-4"
          />
        </div>

        <div>
          <label htmlFor="initialWordInput">Initial word: </label>
          <input
            type="text"
            id="initialWordInput"
            value={initialWord}
            onChange={handleInitialWordChange}
            className="w-full px-4 py-2 bg-gray-700 text-zinc-300 rounded-md mt-2 mb-4"
          />
        </div>

        <div>
          <label htmlFor="difficulty">
            Difficulty: {difficultyText[difficulty]}
          </label>
          <input
            type="range"
            min={1}
            max={3}
            step={1}
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(Number(e.target.value))}
            className="w-full px-4 py-2 bg-gray-700 text-zinc-300 rounded-md mt-2"
          />
        </div>
      </div>
    </div>
  )
}
