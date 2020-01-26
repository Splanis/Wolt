import React from "react";
import "./Restaurant.scss";

const Restaurant = ({ name, city, description, image }) => {
    return (
        <div className="restaurant-card">
            <img src={image} />
            <div className="restaurant-content">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{city}</p>
            </div>
        </div>
    );
};

export default Restaurant;
