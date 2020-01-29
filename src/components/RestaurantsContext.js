import React, { useState, createContext } from "react";
import data from "../data/restaurants.json";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = props => {
    // Getting restaurants data from the .json file
    const [restaurants, sortRestaurants] = useState(data["restaurants"]);
    // Storing restaurants data from the .json file so we can have it unsorted
    const [unsortedRestaurants] = useState(data["restaurants"]);

    return (
        <RestaurantsContext.Provider value={[restaurants, sortRestaurants, unsortedRestaurants]}>
            {props.children}
        </RestaurantsContext.Provider>
    );
};
