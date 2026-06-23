import cardsData from "./cards.json";
import useItems from "./Apicall";

function CardsPage() {
  const { items: cards, addItems } =
    useItems(cardsData, 2, "Cards");

  return (
    <div>
      <h2>Cards Page</h2>

      <button onClick={addItems}>
        Add 2 Cards
      </button>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              border: "1px solid black",
              padding: "15px",
              width: "200px",
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsPage;