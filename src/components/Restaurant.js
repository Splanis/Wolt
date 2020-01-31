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

    console.log(onlineProps);

    return (
        // gridProps are passed because in mobile viewport the layout is always grid
        <RestaurantCard {...gridProps}>
            <RestaurantImage {...gridProps}>
                <ProgressiveImage src={image}>
                    {(image, loading) => {
                        // ProgressiveImage Component loads placeholder (Blurhash Component) while loading the real image
                        return loading ? placeholder : <img src={image} alt="" style={{ filter: online ? "none" : "grayscale(100%)" }} />;
                        // If the restaurant is not online, it gets className 'closed' which means it has black & white image
                    }}
                </ProgressiveImage>
                <Offline style={{ display: online ? "none" : "flex" }}>Offline</Offline>
            </RestaurantImage>
            <RestaurantContent>
                <RestaurantTitle>{name}</RestaurantTitle>
                <RestaurantDescription>{description}</RestaurantDescription>
                <RestaurantTags>
                    Delivery: {delivery_price / 100}€ - {tags.join(", ")}
                </RestaurantTags>
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

    @media (max-width: 600px) {
        flex-direction: column;
        width: 340px;
        height: 400px;
    }
`;

const RestaurantImage = styled.div`
    width: ${props => (props.isGrid ? "100%" : "250px;")};
    height: ${props => (props.isGrid ? "70%" : "170px")};
    overflow: hidden;
    border-radius: 3px 3px 0 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 130%;
        height: 100%;
        border-radius: 3px 3px 0 0;
        transition: all 0.5s;
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
`;

const RestaurantTitle = styled.h2`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RestaurantDescription = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-size: 1.2rem;
`;

const RestaurantTags = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: rgb(130, 130, 130);
`;

const Offline = styled.p`
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: white;
    text-shadow: 0px 0px 6px #000000;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export default Restaurant;
