import PropTypes from 'prop-types'

KBD.propTypes = {
  children: PropTypes.node.isRequired,
}

function KBD({ children }) {
  return (
    <kbd className="px-2 font-mono text-gray-800 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
      {children}
    </kbd>
  )
}

Explanation.propTypes = {
  targetWord: PropTypes.string.isRequired,
}

export default function Explanation(props) {
  const { targetWord } = props
  return (
    <div id="explanation" className="bg-gray-800 p-4 rounded-md mb-2">
      <p>
        <strong>Welcome to Brickle!</strong>
      </p>
      <ul>
        <li className="mb-2">
          Use your keyboard or the buttons below to generate a value for
          &apos;script&apos; so that the &apos;result&apos; equals &apos;
          {targetWord}&apos;
        </li>

        <li>
          <KBD>←</KBD> or <KBD>L</KBD> moves the first character to the end
        </li>
        <li>
          <KBD>→</KBD> or <KBD>R</KBD> moves the last character to the start
        </li>
        <li>
          <KBD>↑</KBD> or <KBD>!</KBD> reverses the first four characters
        </li>
        <li>
          <KBD>⌫ (Backspace)</KBD> deletes the last character
        </li>
        <li>
          <KBD>⎋ (Esc)</KBD> resets the script
        </li>
      </ul>
    </div>
  )
}
