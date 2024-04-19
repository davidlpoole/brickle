import PropTypes from 'prop-types'

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
          <span className="arrow-key left-arrow">←</span> or <kbd>L</kbd> moves
          the first character to the end
        </li>
        <li>
          <span className="arrow-key right-arrow">→</span> or <kbd>R</kbd> moves
          the last character to the start
        </li>
        <li>
          <span className="arrow-key up-arrow">↑</span> or <kbd>!</kbd> reverses
          the first four characters
        </li>
      </ul>
    </div>
  )
}
