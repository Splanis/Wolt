import React, { useContext } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import "../assets/styles/Sort.scss";

const Sort = () => {
    const [restaurants, sortRestaurants, unsortedRestaurants] = useContext(RestaurantsContext);

    const handleSort = e => {
        switch (e.target.value) {
            case "rating":
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
        <div className="Sorting">
            <p>Sort by:</p>
            {/* This is not actually by rating, just the default sort from the json */}
            <button value="rating" onClick={handleSort}>
                Rating
            </button>
            <button value="ascending" onClick={handleSort}>
                A-Z
            </button>
            <button value="descending" onClick={handleSort}>
                Z-A
            </button>
        </div>
    );
};

export default Sort;
