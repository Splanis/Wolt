import React from "react";
import { Blurhash } from "react-blurhash";
import ProgressiveImage from "react-progressive-image";
import styled from "styled-components";

const Restaurant = ({ name, description, image, blurhash, delivery_price, tags, online, isGrid }) => {
    const placeholder = <Blurhash hash={blurhash} width={350} height={350} resolutionX={32} resolutionY={32} punch={1} />;

    const gridProps = {};
    if (isGrid) {
        gridProps.isGrid = isGrid;
    }

    const onlineProps = {};
    if (online) {
        onlineProps.online = online;
    }

    console.log(onlineProps)

    return (
        <RestaurantCard {...gridProps}>
            <RestaurantImage {...gridProps}>
                <ProgressiveImage src={image} >
                    {(image, loading) => {
                        // ProgressiveImage Component loads placeholder (Blurhash Component) while loading the real image
                        return loading ? placeholder : <img src={image} alt="" className={online ? null : "closed"} />;
                        // If the restaurant is not online, it gets className 'closed' which means it has black & white image
                    }}
                </ProgressiveImage>
                <p className={online ? null : "offline"}>Offline</p>
                <Offline></Offline>
            </RestaurantImage>
            <RestaurantContent>
                <h2 className="restaurant-title">{name}</h2>
                <p className="restaurant-description">{description}</p>
                <p className="restaurant-tags">
                    Delivery: {delivery_price / 100}€ - {tags.join(", ")}
                </p>
            </RestaurantContent>
        </RestaurantCard>
    );
};

const RestaurantCard = styled.div`
    display: flex;
    flex-direction: ${props => (props.isGrid ? "column" : "row")};
    width: ${props => (props.isGrid ? "340px" : "750px")};
    height: ${props => (props.isGrid ? "400px" : "170px")};
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    margin: 10px;

    &:hover {
        cursor: pointer;
    }

    &:hover img {
        transform: scale(1.05);
    }

    .closed {
        filter: grayscale(100%);
    }

    .offline {
        font-size: 3rem;
        color: white;
        text-shadow: 0px 0px 6px #000000;
        z-index: 5;
        position: absolute;
        display: flex;
        justify-content: center;
        top: ${props => (props.isGrid ? "35%" : "45%")};
        width: 100%;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        width: 340px;
        height: 400px;

        .offline {
            top: 45%;
        }
    }
`;

const RestaurantImage = styled.div`
    width: ${props => (props.isGrid ? "100%" : "250px;")};
    height: ${props => (props.isGrid ? "70%" : "170px")};
    overflow: hidden;
    border-radius: 3px 3px 0 0;
    position: relative;

    img {
        width: 120%;
        height: 100%;
        border-radius: 3px 3px 0 0;
        transition: all 0.5s;
    }

    .offline {
        top: 40%;
    }

    @media (max-width: 600px) {
        width: 100%;
        height: 70%;
    }
`;

const RestaurantContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2,
    p {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2 {
        flex: 1;
    }

    & p:nth-child(2) {
        font-size: 1.2rem;
        flex: 1;
    }
    & p:nth-child(3) {
        color: rgb(130, 130, 130);
        flex: 1;
    }
`;

const Offline = styled.div`
    font-size: 3rem;
    color: white;
    text-shadow: 0px 0px 6px #000000;
    z-index: 5;
    position: absolute;
    justify-content: center;
    top: 35%;
    width: 100%;
`;

export default Restaurant;
