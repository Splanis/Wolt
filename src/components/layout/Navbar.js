import React from "react";
import woltLogo from "../../assets/icons/wolt-logo.png";
import styled, { keyframes } from "styled-components";

const Navbar = () => {
    return (
        <NavBarContain>
            <Logo src={woltLogo}></Logo>
        </NavBarContain>
    );
};

// Components' style
const NavBarAnimation = keyframes`
    from {
        margin-bottom: 120px;
    }
`;

const NavBarContain = styled.nav`
    background-color: #333333;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    width: 100%;
    box-shadow: 0px 2px 14px 2px rgba(0, 0, 0, 0.6);
    z-index: 10;
`;

const Logo = styled.img`
    height: 60px;
    margin-left: 10px;
    width: 150px;
    animation: ${NavBarAnimation} 0.8s;
`;

export default Navbar;
