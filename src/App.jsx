import { useEffect, useState } from 'react'
import { run } from './utils'
import ScriptDisplay from './components/ScriptDisplay'
import ResultDisplay from './components/ResultDisplay'
import { useSearchParams } from 'react-router-dom'
import GameConfig from './components/GameConfig'
import Explanation from './components/Explanation'
import GameInput from './components/GameInput'

function App() {
  const [script, setScript] = useState('')
  const [initialWord, setInitialWord] = useState('')
  const [targetWord, setTargetWord] = useState('')
  const [difficulty, setDifficulty] = useState(1)

  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const initial = searchParams.get('initial')
    const target = searchParams.get('target')
    const script = searchParams.get('script')

    initial ? setInitialWord(initial.toLowerCase()) : setInitialWord('bciklre')
    target ? setTargetWord(target.toLowerCase()) : setTargetWord('brickle')
    script ? setScript(script.toLowerCase()) : setScript('')
  }, [searchParams])

  return (
    <>
      <div className="bg-gray-900 text-white max-w-md mx-auto mt-6 p-4 rounded-lg shadow-md">
        <div>
          <div>
            <Explanation targetWord={targetWord} />
            <GameInput
              {...{
                script,
                setScript,
                setSearchParams,
                initialWord,
                targetWord,
              }}
            />
          </div>
          <div>
            <ScriptDisplay script={script} />
            <ResultDisplay
              result={run(script, initialWord, difficulty)}
              target={targetWord}
            />
          </div>
        </div>
      </div>
      <GameConfig
        {...{
          initialWord,
          targetWord,
          setInitialWord,
          setTargetWord,
          setSearchParams,
          setScript,
          difficulty,
          setDifficulty,
        }}
      />
    </>
  )
}

export default App
