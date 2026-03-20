import "./App.css";
import PetCard from "./components/PetCard";
import HappinesCounter from "./components/HappinessCounter";
import { useState } from "react";

function App() {
  const [happiness, setHappiness] = useState(0);
  const pet = {
    name: "Бублик",
    type: "Собака",
    age: 2,
  };
  return (
    <div className="app-container">
      <h1>Мой питомец Бублик</h1>
      <div className="photos-container">
        <img src="/бублик.jpg" alt="Бублик" className="pet-photo" />
        <img src="/бублик2.jpg" alt="Бублик" className="pet-photo" />
        <img src="/бублик3.jpg" alt="Бублик" className="pet-photo" />
      </div>

      <PetCard pet={pet} happiness={happiness} />
      <HappinesCounter happiness={happiness} setHappiness={setHappiness} />
    </div>
  );
}

export default App;
