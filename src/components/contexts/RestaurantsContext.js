import React, { useState, createContext } from "react";
import data from "../../data/restaurants.json";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = props => {
    // Getting restaurants data from the .json file
    const [restaurants, sortRestaurants] = useState(data["restaurants"]);
    
    return (
        <RestaurantsContext.Provider value={[restaurants, sortRestaurants]}>
            {props.children}
        </RestaurantsContext.Provider>
    );
};
