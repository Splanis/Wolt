import React, { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import Sort from "./Sort";
import LayoutToggle from "./LayoutToggle";
import styled from "styled-components";

const Header = ({ toGrid, toList, isGrid }) => {
    // Getting the restaurants data from our Restaurants Context API
    const [restaurants] = useContext(RestaurantsContext);

    // Get how much restaurants are online
    const restaurantsOnline = restaurants.filter(restaurant => restaurant.online === true).length;

    return (
        <HeaderContainer>
            <OpenRestaurants>{restaurantsOnline} Restaurants open & online</OpenRestaurants>
            <Buttons>
                <Sort />
                <LayoutToggle toGrid={toGrid} toList={toList} isGrid={isGrid} />
            </Buttons>
        </HeaderContainer>
    );
};

// Components' style
const HeaderContainer = styled.div`
    width: 100%;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Buttons = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`;

const OpenRestaurants = styled.h1`
    font-size: 1.7rem;
    text-align: center;

    @media (max-width: 750px) {
        font-size: 1.5rem;
    }
`;

export default Header;
