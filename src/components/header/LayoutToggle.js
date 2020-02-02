import React, { useContext } from "react";
import { LayoutContext } from "../contexts/LayoutContext";
import Button from "../sharedStyles/Button";
import { ActiveButton } from "../sharedStyles/Button";
import styled from "styled-components";
import gridIcon from "../../assets/icons/grid.png";
import listIcon from "../../assets/icons/list.png";

const LayoutToggle = () => {
    const [isGrid, setGrid] = useContext(LayoutContext);

    return (
        <LayoutButtons>
            <Button style={{ boxShadow: isGrid ? ActiveButton : null }} onClick={() => setGrid(true)}>
                <img src={gridIcon} alt="grid" />
            </Button>
            <Button style={{ boxShadow: !isGrid ? ActiveButton : null }} onClick={() => setGrid(false)}>
                <img src={listIcon} alt="list" />
            </Button>
        </LayoutButtons>
    );
};

// Components' style
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
