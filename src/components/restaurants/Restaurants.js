import React, { useContext } from "react";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import { LayoutContext } from "../contexts/LayoutContext";
import Restaurant from "./Restaurant";
import styled from "styled-components";

const Restaurants = () => {
    // Getting the restaurants data from our Restaurants Context API
    const [restaurants] = useContext(RestaurantsContext);

    // Getting the layout Style
    const [isGrid] = useContext(LayoutContext);

    // layoutProps so Components will know if style is grid or list
    let layoutProps = {};
    if (isGrid) {
        layoutProps.isGrid = isGrid;
    }

    return (
        <RestaurantsContainer>
            <RestaurantsMap {...layoutProps}>
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
                        layoutProps={layoutProps}
                    />
                ))}
            </RestaurantsMap>
        </RestaurantsContainer>
    );
};

// Components' style
const RestaurantsContainer = styled.div`
    display: flex;
    flex-direction: ${props => (props.isGrid ? "row" : "column")};
    justify-content: center;
    width: 100%;
`;

const RestaurantsMap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export default Restaurants;
