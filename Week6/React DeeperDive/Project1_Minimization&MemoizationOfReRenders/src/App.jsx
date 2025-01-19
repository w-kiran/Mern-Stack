//Error

// function App() {
//   return (
//       <Header title="my name is Kiran" />
//       <Header title="My name is JS" />
//   )
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// export default App

// Jsx expressions must have one parent element
// import React from "react"
// import { useState } from "react"

// function App() {
//   const [title, setTitle]= useState("My name is Kiran");

//   function updateTitle(){
//     setTitle("My name is "+ Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//       <Header title="My name is JS"></Header>
//     </div>
//   )
// }

// function Header({title}) {
  
//   return <div>
//     {title}
//   </div>
// }

// export default App


//Minimization of re-renders
// import { useState } from "react"

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="My name is kiran" />
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState("my name is kiran");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random())
//   }

//   return <>
//     <button onClick={changeTitle}>Click me to change the title</button>
//     <Header title={firstTitle} />
//   </>
// }

// function Header({title}) {
//   console.log("re-renders");
  
//   return <div>
//     {title}
//   </div>
// }

// export default App


//Memoization to minimize the re-renders
import React from "react"
import { useState } from "react"

function App() {
  const [title, setTitle]= useState("My name is Kiran");

  function updateTitle(){
    setTitle("My name is "+ Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="My name is JS"></Header>
    </div>
  )
}

const Header=React.memo(function Header({title}) {
  console.log("re rendering")
  return <div>
    {title}
  </div>
})

export default App