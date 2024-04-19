import PropTypes from 'prop-types'
import trashIcon from '../assets/trash.svg'

GameInput.propTypes = {
  script: PropTypes.string.isRequired,
  setScript: PropTypes.func.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  initialWord: PropTypes.string.isRequired,
  targetWord: PropTypes.string.isRequired,
}

export default function GameInput(props) {
  const { script, setScript, setSearchParams, initialWord, targetWord } = props

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

  return (
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
  )
}
