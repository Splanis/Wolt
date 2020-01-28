import React, { useContext } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import Sort from "./Sort";
import Restaurant from "./Restaurant";
import "../assets/styles/RestaurantList.scss";

const RestaurantList = () => {
    const [restaurants] = useContext(RestaurantsContext);

    return (
        <div className="restaurant-list">
            <div className="header">
                <h2>Restaurants open & online</h2>
                <div className="sort">
                    {/* Sort by: */}
                    <Sort />
                </div>
            </div>

            <hr className="divider" />

            <div className="restaurant-grid">
                {restaurants.map(restaurant => (
                    <Restaurant
                        key={restaurant.name}
                        name={restaurant.name}
                        city={restaurant.city}
                        description={restaurant.description}
                        image={restaurant.image}
                        delivery_price={restaurant.delivery_price}
                        tags={restaurant.tags}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantList;
