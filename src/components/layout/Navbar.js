import React from "react";
import "../../assets/styles/Navbar.scss";
import userIcon from "../../assets/icons/user-icon.png";
import searchIcon from "../../assets/icons/search-icon.png";
import menuIcon from "../../assets/icons/menu-icon.png";

const Navbar = () => {
	return (
		<div className="navbar">
			<h1>Wolt</h1>
			<button className="mobile-menu-btn">
				<img src={menuIcon} />
			</button>
			<div className="search-bar">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search..."
				/>
				<img src={searchIcon} className="search-icon" />
			</div>
			<div className="user">
				<img className="user-icon" src={userIcon} />
				<p>Username</p>
			</div>
		</div>
	);
};

export default Navbar;
