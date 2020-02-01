import React from "react";
import styled from "styled-components";
import gridIcon from "../assets/icons/grid.png";
import listIcon from "../assets/icons/list.png";
import Button from "./SharedStyles/Button";
import { ActiveButton } from "./SharedStyles/Button";

const LayoutToggle = ({ toGrid, toList, isGrid }) => {
    return (
        <LayoutButtons>
            <Button style={{ boxShadow: isGrid ? ActiveButton : null }} onClick={toGrid}>
                <img src={gridIcon} alt="grid" />
            </Button>
            <Button style={{ boxShadow: !isGrid ? ActiveButton : null }} onClick={toList}>
                <img src={listIcon} alt="list" />
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
