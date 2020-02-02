import React from "react";
import WoltLogo from "../SVGs/WoltLogo";
import styled from "styled-components";

const Navbar = () => {
    return (
        <NavBarContain>
            <WoltLogo />
        </NavBarContain>
    );
};

// Components' style
const NavBarContain = styled.nav`
    background-color: #333333;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    box-shadow: 0px 2px 14px 2px rgba(0, 0, 0, 0.6);
    z-index: 10;
`;

export default Navbar;
