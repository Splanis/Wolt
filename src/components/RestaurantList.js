import React, { useContext } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import Restaurant from "./Restaurant";
import "./RestaurantList.scss";

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useContext(RestaurantsContext);

    return (
        <div className="restaurant-list">
            <h1>Restaurants</h1>
            <div className="restaurant-grid">
                {restaurants.map(restaurant => (
                    <Restaurant
                        key={restaurant.name}
                        name={restaurant.name}
                        city={restaurant.city}
                        description={restaurant.description}
                        image={restaurant.image}
                    />
                ))}{" "}
            </div>
        </div>
    );
};

export default RestaurantList;
