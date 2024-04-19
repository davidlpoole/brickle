import PropTypes from 'prop-types'

CharCount.propTypes = {
  count: PropTypes.number.isRequired,
}

function CharCount(props) {
  return (
    <div className=" text-end px-4 ml-2 py-2 bg-gray-700 text-gray-400 rounded-md mt-2 mb-4 duration-700 transition-transform">
      {props.count}
    </div>
  )
}

ScriptDisplay.propTypes = {
  script: PropTypes.string.isRequired,
}

export default function ScriptDisplay(props) {
  const { script } = props
  return (
    <>
      <div className="font-bold">Script:</div>
      <div className="flex items-center">
        <input
          type="text"
          id="scriptDisplay"
          value={script.toUpperCase()}
          disabled
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md mt-2 mb-4"
        />
        <CharCount count={script.length} />
      </div>
    </>
  )
}
