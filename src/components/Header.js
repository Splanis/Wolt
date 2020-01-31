import React from "react";
import styled from "styled-components";
import Sort from "./Sort";
import LayoutToggle from "./LayoutToggle";

const Header = ({ restaurantsOnline, toGrid, toList }) => {
    return (
        <HeaderContain>
            <OpenRestaurants>{restaurantsOnline} Restaurants online</OpenRestaurants>
            <Buttons>
                <Sort />
                <LayoutToggle toGrid={toGrid} toList={toList} />
            </Buttons>
        </HeaderContain>
    );
};

const HeaderContain = styled.div`
    margin: 10px;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const OpenRestaurants = styled.h1`
    font-size: 1.5rem;
`;

const Buttons = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`;

export default Header;
