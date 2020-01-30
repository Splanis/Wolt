import React from "react";
import woltLogo from "../../assets/icons/wolt-logo.png";
import styled, { keyframes } from "styled-components";

const Navbar = () => {
    return (
        <NavBarContain>
            <img className="logo" src={woltLogo} alt="logo" />
        </NavBarContain>
    );
};

// Components' style
const fadeIn = keyframes`
    from {
        margin-bottom: 120px;
    }
`;

const NavBarContain = styled.nav`
    background-color: #333333;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: fixed;
    width: 100%;
    z-index: 10;

    .logo {
        height: 60px;
        margin-left: 10px;
        width: 150px;
        animation: ${fadeIn} 0.8s;
    }
`;

export default Navbar;
