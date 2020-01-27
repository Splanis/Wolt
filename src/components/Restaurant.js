import React from "react";
import "../assets/styles/Restaurant.scss";

const Restaurant = ({ name, city, description, image, delivery_price }) => {
    return (
        <div className="restaurant-card">
            <img src={image} alt="restaurant" />
            <div className="restaurant-content">
                <h2>{name}</h2>
                <p className="description">{description}</p>
                <p>
                    {city}, Delivery: {delivery_price / 100}€
                </p>
            </div>
        </div>
    );
};

export default Restaurant;
