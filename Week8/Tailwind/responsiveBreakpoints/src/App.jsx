import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-500 md:bg-blue-500'>
        hi there
      </div>
      <br></br>

      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className="bg-red-500">hi there 1</div>
        <div className="bg-blue-500">hi there 2</div>
        <div className="bg-green-500">hi there 3</div>
      </div>
    </>
  )
}

export default App
