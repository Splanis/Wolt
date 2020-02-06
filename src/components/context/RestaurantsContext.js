import React, { createContext, useReducer } from "react";
import data from "../../data/restaurants.json";

// Getting restaurants data from the .json file
const restaurantsData = data["restaurants"];

const sortReducer = (restaurants, action) => {
    switch (action.type) {
        case "ascending":
            return [...restaurants].sort((restaurants1, restaurants2) => (restaurants1.name < restaurants2.name ? -1 : 1));         
        case "descending": 
            return [...restaurants].sort((restaurants1, restaurants2) => (restaurants1.name > restaurants2.name ? -1 : 1));
        default:
            return [...restaurantsData];    
    }
}
// Used '? -1 : 1' to handle sorting at Google Chrome and Safari

export const RestaurantsContext = createContext();

export const RestaurantsProvider = props => {
    const [restaurants, dispatch] = useReducer(sortReducer, restaurantsData);
    
    return (
        <RestaurantsContext.Provider value={[restaurants, dispatch]}>
            {props.children}
        </RestaurantsContext.Provider>
    );
};
