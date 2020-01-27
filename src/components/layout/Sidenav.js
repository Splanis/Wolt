import React from "react";
import "../../assets/styles/Sidenav.scss";
import searchIcon from "../../assets/icons/search-icon.png";

const Sidenav = () => {
    return (
        <div className="sidenav">
            <button className="close-btn">&times;</button>
            <div className="search-bar">
                <input type="text" name="search" id="search-sidenav" placeholder="Search..." />
                <img src={searchIcon} alt="search" className="search-icon" />
            </div>
        </div>
    );
};

export default Sidenav;
