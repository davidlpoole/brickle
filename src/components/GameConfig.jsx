import PropTypes from 'prop-types'

GameConfig.propTypes = {
  initialWord: PropTypes.string.isRequired,
  handleInitialWordChange: PropTypes.func.isRequired,
  targetWord: PropTypes.string.isRequired,
  handleTargetWordChange: PropTypes.func.isRequired,
}

export default function GameConfig(props) {
  const {
    initialWord,
    handleInitialWordChange,
    targetWord,
    handleTargetWordChange,
  } = props

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
