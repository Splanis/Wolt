import React from "react";
import "../../assets/styles/Navbar.scss";
import woltLogo from "../../assets/icons/wolt-logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={woltLogo} alt="logo" />
        </div>
    );
};

export default Navbar;
