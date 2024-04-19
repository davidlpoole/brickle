import PropTypes from 'prop-types'
import { shuffleWord } from '../utils'

GameConfig.propTypes = {
  initialWord: PropTypes.string.isRequired,
  targetWord: PropTypes.string.isRequired,
  setInitialWord: PropTypes.func.isRequired,
  setTargetWord: PropTypes.func.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  setScript: PropTypes.func.isRequired,
}

export default function GameConfig(props) {
  const {
    initialWord,
    targetWord,
    setInitialWord,
    setTargetWord,
    setSearchParams,
    setScript,
  } = props

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
      className="pt-4 bg-gray-900 text-zinc-400 max-w-md mx-auto mt-6 p-6 rounded-lg shadow-md"
    >
      <div className="font-bold mb-2">Configure game (advanced)</div>

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
          className="w-full px-4 py-2 bg-gray-700 text-zinc-300 rounded-md mt-2"
        />
      </div>
    </div>
  )
}
