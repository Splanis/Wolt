import React, { useContext, useState } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import Sort from "./Sort";
import Restaurant from "./Restaurant";
import "../assets/styles/Restaurants.scss";
import gridIcon from "../assets/icons/grid.png";
import listIcon from "../assets/icons/list.png";

const Restaurants = () => {
    // Getting the restaurants data from our Restaurants Context API
    const [restaurants] = useContext(RestaurantsContext);

    // State for the Layout Style, if isGrid == True then layout is Grid else the layout is List
    const [isGrid, setGrid] = useState(true);

    // Counting all restaurants that are online
    const restaurantsOnline = restaurants.filter(restaurant => restaurant.online == true).length;
 
    return (
        <div className="restaurants">
            <div className="header">
                <h2>{restaurantsOnline} Restaurants open & online</h2>
                <div className="sort">
                    <Sort />
                </div>
                <div className="layout-btns">
                    <button className="grid-btn" onClick={() => setGrid(true)}>
                        <img src={gridIcon} alt="grid" />
                    </button>
                    <button className="list-btn" onClick={() => setGrid(false)}>
                        <img className="list-img" src={listIcon} alt="list" />
                    </button>
                </div>
            </div>

            <hr className="divider" />

            {/* If isGrid == True then active CSS class is layout-grid else active CSS class is layout-list */}
            <div className={isGrid ? "layout-grid" : "layout-list"}>
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
            </div>
        </div>
    );
};

export default Restaurants;
