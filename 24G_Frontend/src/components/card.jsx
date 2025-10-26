import "../css/card.css";
import { useState } from "react";

//* This component represents a drink card that shows the front image by default
//* and switches to the back image on hover. It also handles click events to
//* trigger actions such as opening a popup with more details.

function Card({ drink, onClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <div 
                className="card"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={onClick}
            >
                <img src={hovered ? drink.images.back : drink.images.front} alt={drink.name} className="card-image" />
            </div>
        </>
    );
}

export default Card;