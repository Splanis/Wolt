import React, { useContext } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import "../assets/styles/Sort.scss";

const Sort = () => {
	const [restaurants, sortRestaurants] = useContext(RestaurantsContext);

	const handleSort = e => {
		if (e.target.value === "ascending") {
			sortRestaurants(restaurants =>
				[...restaurants].sort((restaurants1, restaurants2) =>
					restaurants1.name < restaurants2.name ? -1 : 1
				)
			);
		} else if (e.target.value === "descending") {
			sortRestaurants(restaurants =>
				[...restaurants].sort((restaurants1, restaurants2) =>
					restaurants1.name > restaurants2.name ? -1 : 1
				)
			);
		}
	};

	return (
		<div className="select-box">
			<select
				
				name="sort"
				id="sort"
				onChange={handleSort}
			>
				<option value="nonSorted" disabled="true" selected="true">
					Sort By
				</option>
				<option value="ascending">Ascending</option>
				<option value="descending">Descending</option>
			</select>

		</div>
	);
};

export default Sort;
