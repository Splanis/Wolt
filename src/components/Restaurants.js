import React, { useContext, useState } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import Restaurant from "./Restaurant";
import Header from "./Header";
import styled from "styled-components";

const Restaurants = () => {
    // Getting the restaurants data from our Restaurants Context API
    const [restaurants] = useContext(RestaurantsContext);

    // State for the Layout Style, if isGrid == True then layout is Grid else the layout is List
    const [isGrid, setGrid] = useState(true);

    // Counting all restaurants that are online
    const restaurantsOnline = restaurants.filter(restaurant => restaurant.online === true).length;

    const toGrid = () => {
        if (!isGrid) {
            setGrid(true);
        }
    };

    const toList = () => {
        if (isGrid) {
            setGrid(false);
        }
    };

    let gridProps = {};
    if (isGrid) {
        gridProps.isGrid = isGrid;
    }

    return (
        <RestaurantsContain>
            <Header restaurantsOnline={restaurantsOnline} toGrid={toGrid} toList={toList} />

            <Divider />

            {/* <RestaurantsMap className={isGrid ? "layout-grid" : "layout-list"}> */}
            <RestaurantsMap {...gridProps}>
                {/* Mapping all the Restaurants */}
                {restaurants.map(restaurant => (
                    <Restaurant
                        key={restaurant.name} // In real world key whould be some ID
                        name={restaurant.name}
                        description={restaurant.description}
                        image={restaurant.image}
                        delivery_price={restaurant.delivery_price}
                        tags={restaurant.tags}
                        blurhash={restaurant.blurhash}
                        online={restaurant.online}
                        isGrid={isGrid}
                    />
                ))}
            </RestaurantsMap>
        </RestaurantsContain>
    );
};

// Components' style
const RestaurantsContain = styled.div`
    display: flex;
    flex-direction: ${props => (props.isGrid ? "row" : "column")};
    justify-content: center;
    padding-top: 70px;
    margin: 10px;
    width: 100%;
`;

const Divider = styled.hr`
    margin: 0 11px 25px 11px;
    color: rgba(0, 0, 0, 0.6);
`;

const RestaurantsMap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export default Restaurants;
