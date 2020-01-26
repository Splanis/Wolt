import React from "react";
import "./Navbar.scss";
import logo from '../../assets/icons/user-icon.png';

const Navbar = () => {
	return (
		<div className="navbar">
			<h1>Wolt</h1>
			<input type="text" name="search" id="search" placeholder="Search store, food, location.." />
			<div className="user">
				<img className="user-icon" src={logo} />
				<p>Username</p>
			</div>
		</div>
	);
};

export default Navbar;
