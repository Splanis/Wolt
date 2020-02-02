import React, { useContext, useState } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import styled from "styled-components";
import Button from "./sharedStyles/Button";
import { ActiveButton } from "./sharedStyles/Button";

const Sort = () => {
    const [restaurants, sortRestaurants, unsortedRestaurants] = useContext(RestaurantsContext);

    const [sort, setSort] = useState("rating");

    const handleSort = e => {
        switch (e.target.value) {
            case "ascending":
                sortRestaurants(restaurants =>
                    [...restaurants].sort((restaurants1, restaurants2) => (restaurants1.name < restaurants2.name ? -1 : 1))
                );
                setSort("ascending");
                break;
            case "descending":
                sortRestaurants(restaurants =>
                    [...restaurants].sort((restaurants1, restaurants2) => (restaurants1.name > restaurants2.name ? -1 : 1))
                );
                setSort("descending");
                break;
            default:
                sortRestaurants(unsortedRestaurants);
                setSort("rating");
                break;
        }
        // Added '? -1 : 1' to handle sorting at Google Chrome / Safari
    };

    return (
        <SortButtons>
            <p>Sort by</p>
            {/* This is not actually by rating, just the default sort from the json */}
            <Button style={{ boxShadow: sort === "rating" ? ActiveButton : null }} value="rating" onClick={handleSort}>
                Rating
            </Button>
            <Button style={{ boxShadow: sort === "ascending" ? ActiveButton : null }} value="ascending" onClick={handleSort}>
                A-Z
            </Button>
            <Button style={{ boxShadow: sort === "descending" ? ActiveButton : null }} value="descending" onClick={handleSort}>
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
