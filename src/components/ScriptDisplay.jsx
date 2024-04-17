export default function ScriptDisplay(props) {
  const { script } = props
  return (
    <>
      <div>Script:</div>
      <div id="scriptDisplay">{script.toUpperCase()}</div>
    </>
  )
}
