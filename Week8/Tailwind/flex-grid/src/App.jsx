import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "red" }}>hi</div>
        <div style={{ backgroundColor: "green" }}>hi</div>
        <div style={{ backgroundColor: "yellow" }}>hi</div>
        <div style={{ backgroundColor: "yellow" }}>hi</div>
        <div style={{ backgroundColor: "yellow" }}>hi</div>
      </div>
      <br></br>

      <div className='flex justify-center'>
        <div className='bg-red-500'>hi</div>
        <div className='bg-yellow-500'>hi</div>
      </div>
      <br></br>

      <div className='grid grid-cols-3'>
        <div className='bg-red-500'>hi</div>
        <div className='bg-yellow-500'>hi</div>
        <div className='bg-green-500'>hi</div>
        <div className='bg-green-500'>hi</div>
      </div>
      <br></br>

      <div className='grid grid-cols-5'>
        <div className='bg-red-500'>hi</div>
        <div className='bg-yellow-500'>hi</div>
        <div className='bg-green-500'>hi</div>
        <div className='bg-green-500'>hi</div>
      </div>
      <br></br>

      <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-4'>hi</div>
        <div className='bg-yellow-500 col-span-4'>hi</div>
        <div className='bg-green-500 col-span-2'>hi</div>
      </div>
      <br></br>
    </>
  )
}

export default App
