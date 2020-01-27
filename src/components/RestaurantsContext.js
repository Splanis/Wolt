import React, { useState, createContext } from "react";
import data from "../data/restaurants.json";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = props => {
    const [restaurants, sortRestaurants] = useState(data["restaurants"]);

    return <RestaurantsContext.Provider value={[restaurants, sortRestaurants]}>{props.children}</RestaurantsContext.Provider>;
};
