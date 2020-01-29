import React, { useContext } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import "../assets/styles/Sort.scss";

const Sort = () => {
    const [restaurants, sortRestaurants, unsortedRestaurants] = useContext(RestaurantsContext);

    const handleSort = e => {
        switch (e.target.value) {
            case "nonSorted":
                sortRestaurants(unsortedRestaurants);
                break;
            case "ascending":
                sortRestaurants(restaurants =>
                    [...restaurants].sort((restaurants1, restaurants2) => (restaurants1.name < restaurants2.name ? -1 : 1))
                );
                break;
            case "descending":
                sortRestaurants(restaurants =>
                    [...restaurants].sort((restaurants1, restaurants2) => (restaurants1.name > restaurants2.name ? -1 : 1))
                );
                break;
        }
        // Used spread operator to take restaurants and sort them ascending and descending by name property 
        // Added '? -1 : 1' to handle sorting at Google Chrome / Safari
    };

    return (
        <div>
            <select name="sort" id="sort" onChange={handleSort}>
                <option value="nonSorted" defaultValue>Sort By</option>
                <option value="ascending">Alphabetical: Ascending</option>
                <option value="descending">Alphabetical: Descending</option>
            </select>
        </div>
    );
};

export default Sort;
