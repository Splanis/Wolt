import React from "react";
import styled from "styled-components";
import gridIcon from "../assets/icons/grid.png";
import listIcon from "../assets/icons/list.png";
import Button from "./styled-components/Button";

const LayoutToggle = ({ toGrid, toList }) => {
    return (
        <LayoutButtons>
            <Button onClick={toGrid}>
                <img src={gridIcon} alt="grid" />
            </Button>
            <Button onClick={toList}>
                <img style={{ transform: "scale(1.15)" }} src={listIcon} alt="list" />
            </Button>
        </LayoutButtons>
    );
};

const LayoutButtons = styled.div`
    display: flex;

    img {
        height: 20px;
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 750px) {
        display: none;
    }
`;

export default LayoutToggle;
