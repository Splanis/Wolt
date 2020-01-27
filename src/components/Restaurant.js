import React from "react";
import "../assets/styles/Restaurant.scss";

const Restaurant = ({ name, city, description, image, delivery_price, tags }) => {
    return (
        <div className="restaurant-card">
            <img src={image} alt="restaurant" />
            <div className="restaurant-content">
                <h2>{name}</h2>
                <p className="description">{description}</p>
                <p>
                    Delivery: {delivery_price / 100}€ - {tags.join(", ")}
                </p>
            </div>
        </div>
    );
};

export default Restaurant; 
