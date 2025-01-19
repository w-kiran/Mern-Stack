import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateCard } from './components/CreateCard'
import { Cards } from './components/Cards'

// useEffect hook
function App() {
  const [cards, setCards] = useState([]);

  fetch("http://localhost:3000/cards")
    .then(async function(res) {
      const json = await res.json();
      setCards(json.cards);
    })

  return (
    <div>
      <CreateCard></CreateCard>
      <Cards cards={cards}></Cards>
    </div>
  )

}
export default App
