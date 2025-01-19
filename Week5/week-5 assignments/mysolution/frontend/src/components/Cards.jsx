export function Cards({ cards = [] }) {
    return (
      <div>
        {cards.map((card) => (
          <div key={card._id}>
            <h1>{card.name}</h1>
            <h2>{card.description}</h2>
            <h2>{card.interest}</h2>
            <h2>{card.linkedin}</h2>
            <h2>{card.twitter}</h2>
            <h2>{card.others}</h2>
            <button>{card.completed ? "Completed" : "Mark as Complete"}</button>
          </div>
        ))}
      </div>
    );
  }
  