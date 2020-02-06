import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContain>
            <p>©Copyrighted 2020.</p>
        </FooterContain>
    );
};

const FooterContain = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333333;
    color: white;
    padding: 30px;
    margin-top: 10px;
`;

export default Footer;
