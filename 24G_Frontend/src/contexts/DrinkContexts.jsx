import { createContext, useState } from "react";
import drinkData from "../assets/data/drinks.json";

//* This is the context provider for drink data, allowing components to access the list of drinks.

const DrinkContext = createContext();

export const useDrinkContext = () => useContext(DrinkContext);
export const DrinkProvider = ({ children }) => {
    const [drinks] = useState(drinkData.drinks);

    return (
        <DrinkContext.Provider value={{ drinks}}>
            {children}
        </DrinkContext.Provider>
    );
}