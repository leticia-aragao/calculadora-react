import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Calculator } from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex p-10 justify-center">
        <Calculator></Calculator>
      </div>

    </>
  )
}

export default App
