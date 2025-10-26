import drinksData from '../assets/data/drinks.json';
import Card from '../components/card';
import Popup from "../components/popup";
import "../css/home.css"
import { useState } from 'react';

//* For this page we will display a grid of the drink cards fetched from the JSON file

function Home() {
    const [selectedDrink, setSelectedDrink] = useState(null);

    selectedDrink ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

    return (
        <div className="home">
            <div className="logo-header">
                <img src="https://assets.24g.com/public/2022-frontend-test-project/24g_logo.svg"alt="24G Logo" className="logo"/>
            </div>
            <p className="greeting">Welcome to our Drink Gallery!</p>
            <p className="description">Explore 24G's collection of refreshing beverage recipes below.</p>
            <div className="drink-grid">
                {drinksData.drinks.map((drink) => (
                    <Card key={drink.id} drink={drink} onClick={() => setSelectedDrink(drink)}/>
                ))}
            </div>
            {selectedDrink && (
                <Popup drink={selectedDrink} onClose={() => setSelectedDrink(null)} />
            )}
        </div>
    );
}

export default Home;