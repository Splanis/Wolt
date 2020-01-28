import React, { useContext, useState } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import Sort from "./Sort";
import Restaurant from "./Restaurant";
import "../assets/styles/Restaurants.scss";
import gridIcon from "../assets/icons/grid.png";
import listIcon from "../assets/icons/list.png";

const Restaurants = () => {
    const [restaurants] = useContext(RestaurantsContext);
    const [isGrid, layoutToggle] = useState(true);

    return (
        <div className="restaurants">
            <div className="header">
                <h2>Restaurants open & online</h2>
                <div className="sort">
                    <Sort />
                </div>
                <div className="layout-btns">
                    <button className="grid-btn" onClick={() => layoutToggle(true)}>
                        <img src={gridIcon} alt="grid" />
                    </button>
                    <button className="list-btn" onClick={() => layoutToggle(false)}>
                        <img src={listIcon} alt="grid" />
                    </button>
                </div>
            </div>

            <hr className="divider" />

            <div className={isGrid ? "layout-grid" : "layout-list"}>
                {restaurants.map(restaurant => (
                    <Restaurant
                        key={restaurant.name}
                        name={restaurant.name}
                        city={restaurant.city}
                        description={restaurant.description}
                        image={restaurant.image}
                        delivery_price={restaurant.delivery_price}
                        tags={restaurant.tags}
                        blurhash={restaurant.blurhash}
                        isGrid={isGrid}
                    />
                ))}
            </div>
        </div>
    );
};

export default Restaurants;
