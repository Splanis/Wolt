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
            <RestaurantContent {...gridProps}>
                <RestaurantTitle {...gridProps}>{name}</RestaurantTitle>
                <RestaurantDescription {...gridProps}>{description}</RestaurantDescription>
                <RestaurantInfo>
                    Delivery: {delivery_price / 100}€
                    <RestaurantTags>
                        {tags.map(tag => (
                            <p>{tag}</p>
                        ))}
                    </RestaurantTags>
                </RestaurantInfo>
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
    height: ${props => (props.isGrid ? "280px" : "170px")};
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
    text-align: center;
    padding: ${props => (props.isGrid ? "0" : "20px")};

    @media (max-width: 600px) {
        padding: 0;
        transform: none;
    }
`;

const RestaurantTitle = styled.h2`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 5px;
    font-size: ${props => (props.isGrid ? "" : "1.8rem")};
`;

const RestaurantDescription = styled.p`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    font-size: ${props => (props.isGrid ? "1.2rem" : "1.5rem")};
`;

const RestaurantInfo = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: rgb(130, 130, 130);
`;

const RestaurantTags = styled.p`
    display: flex;
    
    p {
        height: 24px;
        line-height: 24px;
        position: relative;
        margin: 0 0 3px 18px;
        padding: 0 10px 0 12px;
        background: #333333;
        -webkit-border-bottom-right-radius: 3px;
        border-bottom-right-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        border-top-right-radius: 3px;
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        color: #fff;
        font-size: 11px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        font-weight: bold;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: -12px;
            width: 0;
            height: 0;
            border-color: transparent #333333 transparent transparent;
            border-style: solid;
            border-width: 12px 12px 12px 0;
        }
        &::after {
            content: "";
            position: absolute;
            top: 10px;
            left: 1px;
            float: left;
            width: 5px;
            height: 5px;
            -webkit-border-radius: 50%;
            border-radius: 50%;
            background: #fff;
            -webkit-box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
            box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
        }
    }
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
    letter-spacing: 5px;
`;

export default Restaurant;
