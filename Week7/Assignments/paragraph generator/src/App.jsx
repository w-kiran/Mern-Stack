import { useState } from 'react'
import './App.css'
import ParagraphGenerator from './components/ParagraphGenerator'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParagraphGenerator/>
    </>
  )
}

export default App
