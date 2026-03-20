export default function PetCard({ pet, happiness }) {
  const emoji = happiness >= 5 ? "🥳" : happiness > 0 ? "🐶" : "😴";
  return (
    <div className="pet-card">
      <div className="pet-card-header">
        <div className="pet-emoji">{emoji}</div>
        <div className="pet-info">
          <h2>{pet.name}</h2>
          <p>{pet.type}</p>
        </div>
      </div>
      <div className="pet-details">
        <div className="pet-detail-item">
          <div className="label">Имя</div>
          <div className="value">{pet.name}</div>
        </div>
        <div className="pet-detail-item">
          <div className="label">Тип</div>
          <div className="value">{pet.type}</div>
        </div>
        <div className="pet-detail-item">
          <div className="label">Возраст</div>
          <div className="value">{pet.age} года</div>
        </div>
      </div>
    </div>
  );
}
