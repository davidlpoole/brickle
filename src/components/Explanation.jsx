import PropTypes from 'prop-types'

Explanation.propTypes = {
  targetWord: PropTypes.string.isRequired,
}

export default function Explanation(props) {
  const { targetWord } = props
  return (
    <div id="explanation" className="bg-gray-800 p-4 rounded-md mb-2">
      <p>
        <strong>Instructions:</strong>
      </p>
      <ul>
        <li className="mb-2">
          Find a value for &apos;script&apos; so that the &apos;result&apos;
          equals &apos;{targetWord}&apos;
        </li>

        <li>&apos;L&apos; moves the first character to the end,</li>
        <li>&apos;R&apos; moves the last character to the start,</li>
        <li>&apos;!&apos; reverses the first four characters.</li>
      </ul>
    </div>
  )
}
