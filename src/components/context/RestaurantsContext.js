import React, { createContext, useReducer } from "react";
import data from "../../data/restaurants.json";

// Getting restaurants data from the .json file
const restaurantsData = data["restaurants"];

const sortReducer = (restaurants, dispatch) => {
    switch (dispatch.type) {
        case "ascending":
            return [...restaurants].sort((restaurants1, restaurants2) => (restaurants1.name < restaurants2.name ? -1 : 1));         
        case "descending": 
            return [...restaurants].sort((restaurants1, restaurants2) => (restaurants1.name > restaurants2.name ? -1 : 1));
        default:
            return [...restaurantsData];    
    }
}

export const RestaurantsContext = createContext();

export const RestaurantsProvider = props => {
    const [restaurants, sortRestaurants] = useReducer(sortReducer, restaurantsData);
    
    return (
        <RestaurantsContext.Provider value={[restaurants, sortRestaurants]}>
            {props.children}
        </RestaurantsContext.Provider>
    );
};
