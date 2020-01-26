import React, { useContext, Component } from "react";
import { RestaurantsContext } from "./RestaurantsContext";

const Sort = () => {
	const [restaurants, sortRestaurants] = useContext(RestaurantsContext);

	const sortAscending = () => {
		sortRestaurants(restaurants =>
			[...restaurants].sort((restaurants1, restaurants2) => restaurants1.name > restaurants2.name)
		);
	};

	const sortDescending = () => {
		sortRestaurants(restaurants =>
			[...restaurants].sort((restaurants1, restaurants2) => restaurants1.name < restaurants2.name)
		);
	};

	return (
		<div>
			<select name="sort" id="sort">
				<option value="ascending" onClick={sortAscending}>
					Ascending
				</option>
				<option value="descending" onClick={sortDescending}>
					Descending
				</option>
			</select>
		</div>
	);
};

export default Sort;
