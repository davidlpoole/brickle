export default function ScriptDisplay(props) {
  const { script } = props
  return (
    <>
      <div>Script:</div>
      <input
        type="text"
        id="scriptDisplay"
        value={script.toUpperCase()}
        disabled
        className="w-full px-4 py-2 bg-gray-700 text-white rounded-md mt-4 mb-4"
      />
    </>
  )
}
