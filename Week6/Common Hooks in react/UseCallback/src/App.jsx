// import { memo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0)

//   function onClick() {
//     console.log("child clicked")
//   }

//   return <div>
//     <Child onClick={onClick} />
//     <button onClick={() => {
//       setCount(count + 1);
//     }}>Click me {count}</button>
//   </div>
// }

// const Child = memo(({onClick}) => {
//   console.log("child render")

//   return <div>
//     <button onClick={onClick}>Button clicked</button>
//   </div>
// })

// export default App;

import { memo, useCallback, useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const inputFunction = useCallback(() => {
        console.log("hi there");
    }, []);

    return (
        <div>
            <ButtonComponent inputFunction={inputFunction} />
            <button onClick={() => setCount(count + 1)}>
                Click me {count}
            </button>
        </div>
    );
}

const ButtonComponent = memo(({ inputFunction }) => {
    console.log("child render");

    return (
        <div>
            <button onClick={inputFunction}>Button clicked</button>
        </div>
    );
});

export default App;
