import React from "react";
import styled from "styled-components";
import Sort from "./Sort";
import LayoutToggle from "./LayoutToggle";

const Header = ({ restaurantsOnline, toGrid, toList, isGrid }) => {
    return (
        <HeaderContain>
            <OpenRestaurants>{restaurantsOnline} Restaurants open & online</OpenRestaurants>
            <Buttons>
                <Sort />
                <LayoutToggle toGrid={toGrid} toList={toList} isGrid={isGrid} />
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

const Buttons = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
`;

const OpenRestaurants = styled.h1`
    text-align: center;
    font-size: 1.7rem;

    @media (max-width: 750px){
        font-size: 1.5rem;
    }
`;

export default Header;
