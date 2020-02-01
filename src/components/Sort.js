import React, { useContext } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import styled from "styled-components";
import Button from "./SharedStyles/Button";

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
        <SortButtons>
            <p>Sort by:</p>
            {/* This is not actually by rating, just the default sort from the json */}
            <Button value="rating" onClick={handleSort}>
                Rating
            </Button>
            <Button value="ascending" onClick={handleSort}>
                A-Z
            </Button>
            <Button value="descending" onClick={handleSort}>
                Z-A
            </Button>
        </SortButtons>
    );
};

// Components' style
const SortButtons = styled.div`
    display: flex;
    align-items: center;
`;

export default Sort;
