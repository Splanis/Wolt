import React from "react";
import MainLogo from "../SVGs/MainLogo";
import styled from "styled-components";

const Navbar = () => {
    return (
        <NavBarContain>
            <MainLogo />
        </NavBarContain>
    );
};

// Components' style
const NavBarContain = styled.nav`
    background-color: #333333;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    box-shadow: 0px 2px 14px 2px rgba(0, 0, 0, 0.6);
    z-index: 10;

    & :nth-child(1) {
        margin-left: 10px;
    }
`;

export default Navbar;
