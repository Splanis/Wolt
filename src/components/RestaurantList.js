import React, { useContext } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import Sort from "./Sort";
import Restaurant from "./Restaurant";
import "../assets/styles/RestaurantList.scss";
import gridIcon from "../assets/icons/grid.png";
import listIcon from "../assets/icons/list.png";

const RestaurantList = () => {
    const [restaurants] = useContext(RestaurantsContext);

    return (
        <div className="restaurant-list">
            <div className="header">
                <div className="sort">
                    Sort by:
                    <Sort />
                </div>
                <h1>Restaurants</h1>
                <div className="style-change-btns">
                    <button>
                        <img src={gridIcon} alt="grid" />
                    </button>
                    <button>
                        <img className="list-icon" src={listIcon} alt="list" />
                    </button>
                </div>
            </div>

            <div className="restaurant-grid">
                {restaurants.map(restaurant => (
                    <Restaurant
                        key={restaurant.name}
                        name={restaurant.name}
                        city={restaurant.city}
                        description={restaurant.description}
                        image={restaurant.image}
                        delivery_price={restaurant.delivery_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantList;
