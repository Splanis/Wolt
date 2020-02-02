import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import Button from "../sharedStyles/Button";
import { ActiveButton } from "../sharedStyles/Button";
import styled from "styled-components";

const Sort = () => {
    // Getting the restaurants and sortRestaurants function data from our Restaurants Context API
    const [restaurants, dispatch] = useContext(RestaurantsContext);

    const [sort, setSort] = useState("rating");

    return (
        <SortButtons>
            <p>Sort by</p>
            {/* This is not actually by rating, just the default sort from the json */}
            <Button
                style={{ boxShadow: sort === "rating" ? ActiveButton : null }}
                onClick={() => {
                    dispatch({ type: "rating" });
                    setSort("rating");
                }}
            >
                Rating
            </Button>
            <Button
                style={{ boxShadow: sort === "ascending" ? ActiveButton : null }}
                onClick={() => {
                    dispatch({ type: "ascending" });
                    setSort("ascending");
                }}
            >
                A-Z
            </Button>
            <Button
                style={{ boxShadow: sort === "descending" ? ActiveButton : null }}
                onClick={() => {
                    dispatch({ type: "descending" });
                    setSort("descending");
                }}
            >
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
