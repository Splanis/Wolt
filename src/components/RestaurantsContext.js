import React, { useState, createContext } from "react";
import data from "../data/restaurants.json";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = props => {
	const [restaurants, sortRestaurants] = useState(
		data["restaurants"].sort(
			(restaurants1, restaurants2) =>
				restaurants1.name > restaurants2.name
		)
	);

	return (
		<RestaurantsContext.Provider value={[restaurants, sortRestaurants]}>
			{props.children}
		</RestaurantsContext.Provider>
	);
};
