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
            <Divider />
        </HeaderContainer>
    );
};

// Components' style
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const OpenRestaurants = styled.h1`
    font-size: 1.7rem;
    padding: 20px 0 20px 0;
    text-align: center;

    @media (max-width: 735px) {
        font-size: 1.5rem;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 735px) {
        justify-content: center;
    }
`;

const Divider = styled.hr`
    color: rgba(0, 0, 0, 0.6);
    width: 100%;
`;

export default Header;
