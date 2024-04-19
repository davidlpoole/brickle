import PropTypes from 'prop-types'
import { useCallback, useEffect } from 'react'

GameInput.propTypes = {
  script: PropTypes.string.isRequired,
  setScript: PropTypes.func.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  initialWord: PropTypes.string.isRequired,
  targetWord: PropTypes.string.isRequired,
}

export default function GameInput(props) {
  const { script, setScript, setSearchParams, initialWord, targetWord } = props

  const handleButtonClick = useCallback(
    (char) => {
      const newScript = script + char
      setScript(newScript)
      setSearchParams({
        initial: initialWord,
        target: targetWord,
        script: newScript,
      })
    },
    [script, setScript, setSearchParams, initialWord, targetWord]
  )

  const handleBackspace = useCallback(() => {
    const newScript = script.slice(0, -1)
    setScript(newScript)
    setSearchParams({
      initial: initialWord,
      target: targetWord,
      script: newScript,
    })
  }, [script, setScript, setSearchParams, initialWord, targetWord])

  const handleReset = useCallback(() => {
    setScript('')
    setSearchParams({ initial: initialWord, target: targetWord, script: '' })
  }, [setScript, setSearchParams, initialWord, targetWord])

  useEffect(() => {
    const keyToActionMap = {
      ArrowLeft: 'l',
      l: 'l',
      ArrowRight: 'r',
      r: 'r',
      ArrowUp: '!',
      '!': '!',
      Backspace: handleBackspace,
      Escape: handleReset,
    }

    const handleKeyPress = (event) => {
      if (event.target.matches('input, textarea')) return

      const action = keyToActionMap[event.key]
      if (typeof action === 'string') {
        handleButtonClick(action) // 'l', 'r', '!'
      } else if (typeof action === 'function') {
        action() // handleBackspace, handleReset
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleButtonClick, handleBackspace, handleReset])

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
        ⎋
      </button>
    </div>
  )
}
