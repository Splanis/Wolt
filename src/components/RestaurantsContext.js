import React, { useState, createContext } from "react";
import data from "../api/restaurants.json";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = props => {
    const [restaurants, setRestaurants] = useState(data["restaurants"]);

    return <RestaurantsContext.Provider value={[restaurants, setRestaurants]}>{props.children}</RestaurantsContext.Provider>;
};
