import React from "react";
import "../../assets/styles/Sidenav.scss";
import searchIcon from "../../assets/icons/search-icon.png";

const Sidenav = () => {
	return (
		<div className="sidenav">
			<button class="close-btn">&times;</button>
			<div className="search-bar">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search..."
				/>
				<img src={searchIcon} className="search-icon" />
			</div>
		</div>
	);
};

export default Sidenav;
