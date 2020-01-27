import React from "react";
import "../../assets/styles/Navbar.scss";
import userIcon from "../../assets/icons/user-icon.png";
import searchIcon from "../../assets/icons/search-icon.png";
import menuIcon from "../../assets/icons/menu-icon.png";
import woltLogo from "../../assets/icons/wolt-logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={woltLogo} alt="logo" />
            <button className="mobile-menu-btn">
                <img src={menuIcon} alt="menu" />
            </button>
            <div className="search-bar">
                <input type="text" name="search" id="search" placeholder="Search..." />
                <img src={searchIcon} alt="search" className="search-icon" />
            </div>
            <div className="user">
                <img className="user-icon" alt="user" src={userIcon} />
                <p>Username</p>
            </div>
        </div>
    );
};

export default Navbar;
