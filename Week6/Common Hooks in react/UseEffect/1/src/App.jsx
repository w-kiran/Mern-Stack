// import { useState } from "react";
// import { useEffect } from "react";

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos")
//       .then(async function(res) {
//         const json = await res.json();
//         setTodos(json.todos);
//       })
//   }, [])

//   return <div>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//   </div>
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }

// export default App;

import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        setTodos(response.data.todos)
      })
  }, []);
  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </>
  )
}
function Todo({ title, description }) {
  return <div>
    <h1>{title}</h1>
    {description}
  </div>
}
export default App