import { useState } from 'react'
import './App.css'
import AnchorComponent from './components/AnchorComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnchorComponent/>
    </>
  )
}

export default App
