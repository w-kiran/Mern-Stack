
import './App.css'
import { RecoilRoot, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';

function App() {
  return <RecoilRoot>
    {/* <Suspense fallback={"Loading..."}> */}
    <Todo id={1}/>
    <Todo id={2} />
    {/* </Suspense> */}
  </RecoilRoot>
}

function Todo({id}) {
   const todo = useRecoilValueLoadable(todosAtomFamily(id));
   if (todo.state === "loading") {
      return <div>loading...</div>
   }
   else if (todo.state === "hasValue"){
   return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )}
  else if (todo.state === "hasError"){
    return <div>
      Error while getting data from backend.
    </div>
  }
}

export default App
