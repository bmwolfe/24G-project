import "../css/popup.css";

//* This component represents a popup that displays detailed information about a drink.

function Popup({ drink, onClose }) {
  return (
    <div className="popup" onClick={onClose}>
      <img
          src="https://assets.24g.com/public/2022-frontend-test-project/exit_icon.svg"
          alt="Close"
          className="close-button"
          onClick={onClose}
      />
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="name">{drink.name}</h2>
        <div className="popup-scroll">
          <p className="info"><strong>Ingredients</strong></p>
          <ul>
            {drink.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <hr />
          <p className="info"><strong>How to prepare</strong></p>
          <ol>
            {drink.steps.map((s, i) => (
              <li>STEP {i + 1} {s}</li>
            ))}
          </ol>
          <hr />
          <p className="info"><strong>Make it a mocktail:</strong> {drink.mocktail}</p>
          <hr />
          <p className="info"><strong>Glass recommendation:</strong> {drink.glassware}</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
