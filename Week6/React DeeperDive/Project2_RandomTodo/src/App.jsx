
import React from "react"
import { useState } from "react"

function App() {
  const [todos, setTodos]= useState([{
    id: 1,
    title:"title 1",
    description:"description 1"
  },{
    id: 2,
    title:"title 2",
    description:"description 2"
  },{
    id: 3,
    title:"title 3",
    description:"description 3"
  }
])

function addTodo() {
  setTodos ([...todos, {
  id: todos.length+1,
  title: Math.random(),
  description: Math.random()
  }])
  // const newTodos = [];
  // for (let i = 0; i < todos.length; i++) {
  //   newTodos.push(todos[i]);
  // }
  // newTodos.push({
  //   id: todos.length+1,
  //   title: Math.random(),
  //   description: Math.random()
  // });
  // setTodos(newTodos);
}
  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo =>(<Todo key={todo.id} title={todo.title} description={todo.description}/>))}
      
      {/* another way  */}
      
      {/* {todos.map(function(todo)
      {
        return <Todo title={todo.title} description={todo.description}/>
      })} */
      }

      {/* <Todo title={todo[0].title} description={todo[0].description}/> */}
      {/* <Todo title={todo[1].title} description={todo[1].description}/> */}
      {/* <Todo title={todo[2].title} description={todo[2].description}/> */}
    </div>
  )
}

function Todo ({title,description})
{
  return (
  <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
  );
}

export default App