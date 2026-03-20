export default function HappinesCounter({ happiness, setHappiness }) {
  return (
    <div className="happiness-counter">
      <h3>Уровень счастья</h3>
      <div className="happiness-buttons">
        <button
          className="happiness-btn decrease"
          onClick={() => setHappiness(Math.max(0, happiness - 1))}
        >
          −
        </button>
        <button
          className="happiness-btn increase"
          onClick={() => setHappiness(happiness + 1)}
        >
          Играть
        </button>
      </div>
      <div className="happiness-level">
        {happiness >= 5 ? "🥳 Супер!" : happiness > 0 ? "🐶 Хорошо" : "😴 Спит"}
      </div>
    </div>
  );
}
