import React, { useContext } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import Restaurant from "./Restaurant";

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useContext(RestaurantsContext);
    return (
        <div>
            <h1>Restaurants</h1>
            {restaurants.map(restaurant => (
                <Restaurant key={restaurant.blurhash} name={restaurant.name} price={restaurant.price} image={restaurant.image}/>
            ))}
        </div>
    );
};

export default RestaurantList;
