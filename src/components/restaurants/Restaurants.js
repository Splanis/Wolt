import React, { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import Restaurant from "./Restaurant";
import styled from "styled-components";

const Restaurants = () => {
    // Getting the restaurants data from our Restaurants Context API
    const [restaurants] = useContext(RestaurantsContext);

    return (
        <RestaurantsContainer>
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
                />
            ))}
        </RestaurantsContainer>
    );
};

// Components' style
const RestaurantsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default Restaurants;
