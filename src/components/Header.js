import React from "react";
import styled from "styled-components";
import gridIcon from "../assets/icons/grid.png";
import listIcon from "../assets/icons/list.png";
import Button from "./styled-components/Button";
import Sort from "./Sort";

const Header = ({ restaurantsOnline, toGrid, toList }) => {
    return (
        <HeaderContain>
            <h2 className="open-restaurants">{restaurantsOnline} Restaurants open & online</h2>
            <div className="buttons">
                <Sort />
                <div className="layout-btns">
                    <Button className="grid-btn" onClick={toGrid}>
                        <img src={gridIcon} alt="grid" />
                    </Button>
                    <Button className="list-btn" onClick={toList}>
                        <img className="list-img" src={listIcon} alt="list" />
                    </Button>
                </div>
            </div>
        </HeaderContain>
    );
};

const HeaderContain = styled.div`
    margin: 10px;

    .buttons {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }

    .layout-btns {
        margin-left: 20px;
        display: flex;

        img {
            height: 20px;
        }

        .list-img {
            transform: scale(1.15);
        }

        &:focus {
            outline: none;
        }
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        .open-restaurants {
            font-size: 1.3rem;
            text-align: center;
        }

        .sort {
            margin: auto;
            margin-top: 10px !important;
        }

        .layout-btns {
            display: none !important;
        }
    }
`;

export default Header;
