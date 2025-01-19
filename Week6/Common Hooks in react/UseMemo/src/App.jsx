// import { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [sumValue, setSumValue] = useState(0);
//   const [count, setCount] = useState(0)

//   function calculateSum(n) {
//     return (n * (n + 1)) / 2;
//   }

//   function handleInputChange(event) {
//     setInputValue(event.target.value);
//     const sum = calculateSum(parseInt(event.target.value));
//     setSumValue(sum);
//   }

//   return (
//     <div>
//       <input type="number" value={inputValue} onChange={handleInputChange} placeholder="Enter a number"/>
//       <br></br>
//       Sum is {sumValue}
//       <br></br>

//       <button onClick={function () {
//         setCount(count + 1);
//       }}>Counter ({count})</button>
//     </div>
//   );
// }

// export default App;

import { useEffect, useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  // const [finalValue, setFinalValue] = useState(0);

  let count = useMemo(() => {
    console.log("memo got called");
    
    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
      count = count + i;
    }
    return (count);
  }, [inputValue]);

  return <div>
    <input onChange={function (e) {
      setInputValue(e.target.value);
    }} placeholder="Find sum from 1 to n"></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    Sum from 1 to {inputValue} is {finalValue}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter {counter}</button>
  </div>
}

export default App;