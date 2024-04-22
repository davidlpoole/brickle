import PropTypes from 'prop-types'

import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'
import arrowUp from '../assets/arrow-up.svg'
import backspace from '../assets/backspace.svg'

Key.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

function Key({ src, text, description }) {
  return (
    <li key={text}>
      <KBD>
        <img src={src} alt={text} className="w-6 h-6 mr-1 inline" />({text})
      </KBD>
      <span>{description}</span>
    </li>
  )
}

KBD.propTypes = {
  children: PropTypes.node.isRequired,
}

function KBD({ children }) {
  return (
    <kbd className="px-2 mr-1 font-mono text-gray-800 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
      {children}
    </kbd>
  )
}

Explanation.propTypes = {
  targetWord: PropTypes.string.isRequired,
  initialWord: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
}

export default function Explanation(props) {
  const { targetWord, initialWord, difficulty } = props

  const keys = [
    {
      src: arrowLeft,
      text: 'L',
      description: 'rotates all characters to the left',
    },
    {
      src: arrowRight,
      text: 'R',
      description: 'rotates all characters to the right',
    },
    {
      src: arrowUp,
      text: '!',
      description: `reverses the first ${difficulty + 1} characters`,
    },
    {
      src: backspace,
      text: 'Backspace',
      description: 'deletes the last entry',
    },
  ]

  return (
    <div id="explanation" className="bg-gray-800 p-4 rounded-md mb-2">
      <p>
        <strong>Welcome to Brickle!</strong>
      </p>
      <ul>
        <li className="mb-2">
          Use your keyboard or the buttons below to generate a value for the
          &apos;script&apos; that transforms &apos;{initialWord}&apos; to &apos;
          {targetWord}&apos;
        </li>

        {keys.map((key) => (
          <Key key={key.text} {...key} />
        ))}
      </ul>
    </div>
  )
}
