import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount]= useState(0);
  
//   function onClickHandler(){
//   setCount(count+1)
//   }
//   return (
//       <div>
//         <button onClick={onClickHandler}>Counter {count}</button>
//       </div>
//   )
// }

function App() {
  const [count, setCount] = useState(0); // [1, 2]
  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
      <CustomButton count={count + 1} setCount={setCount} />
      <CustomButton count={count - 1} setCount={setCount} />
      <CustomButton count={count * 100} setCount={setCount} />
    </div>
  );
}

// component
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return (
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  );
}
export default App
