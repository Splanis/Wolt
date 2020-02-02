import React from "react";
import ProgressiveImage from "react-progressive-image";
import { Blurhash } from "react-blurhash";
import styled from "styled-components";

const Restaurant = ({ name, description, image, blurhash, delivery_price, tags, online, layoutProps }) => {
    const placeholder = (
        <Blurhash
            hash={blurhash}
            width={340}
            height={260}
            resolutionX={32}
            resolutionY={32}
            punch={1}
            style={{ filter: online ? "none" : "grayscale(100%)" }}
        />
    );

    // onlineProps, so Components will know if restaurant is online or οnline
    const onlineProps = {};
    if (online) {
        onlineProps.online = online;
    }

    return (
        <RestaurantCard {...layoutProps}>
            <RestaurantImage {...layoutProps}>
                <ProgressiveImage src={image}>
                    {(image, loading) => {
                        // ProgressiveImage Component loads placeholder (Blurhash Component) while loading the real image
                        return loading ? placeholder : <img src={image} alt="" style={{ filter: online ? "none" : "grayscale(100%)" }} />;
                        // If the restaurant is not online, it gets className 'closed' which means it has black & white image
                    }}
                </ProgressiveImage>
                <Offline style={{ display: online ? "none" : "flex" }}>Offline</Offline>
            </RestaurantImage>
            <RestaurantContent {...layoutProps}>
                <RestaurantTitle {...layoutProps}>{name}</RestaurantTitle>
                <RestaurantDescription {...layoutProps}>{description}</RestaurantDescription>
                <RestaurantInfo {...layoutProps}>
                    Delivery: {delivery_price / 100}€
                    <RestaurantTags>
                        {tags.map(tag => (
                            <Tag {...layoutProps} key={tag}>
                                {tag}
                            </Tag>
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

    @media (max-width: 750px) {
        flex-direction: column;
        width: 340px;
        height: 400px;
    }
`;

const RestaurantImage = styled.div`
    width: ${props => (props.isGrid ? "100%" : "250px")};
    min-height: ${props => (props.isGrid ? "260px" : "170px")};
    overflow: hidden;
    border-radius: 3px 3px 0 0;
    position: relative;
    display: flex;
    margin-bottom: 3px;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 3px 3px 0 0;
        transition: all 0.5s;
    }

    @media (max-width: 750px) {
        width: 100%;
        min-height: 260px;
    }
`;

const RestaurantContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: ${props => (props.isGrid ? "0" : "20px")};

    @media (max-width: 750px) {
        padding: 0;
    }
`;

const RestaurantTitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 5px;
    font-size: ${props => (props.isGrid ? "1.4rem" : "2rem")};
   
    @media (max-width: 750px) {
        font-size: 1.4rem;
    }
`;

const RestaurantDescription = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 5px;
    font-size: ${props => (props.isGrid ? "1.1rem" : "1.5rem")};
     
    @media (max-width: 750px) {
        font-size: 1.1rem;
    }
`;

const RestaurantInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    color: rgb(130, 130, 130);
    font-size: ${props => (props.isGrid ? "0.95rem" : "1.2rem")};
     
    @media (max-width: 750px) {
        font-size: 0.95rem;
    }
`;

const RestaurantTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Tag = styled.p`
    height: 24px;
    line-height: 24px;
    position: relative;
    margin: 0 0 5px 18px;
    padding: 0 5px 0 10px;
    background: #333333;
    -webkit-border-bottom-right-radius: 3px;
    border-bottom-right-radius: 3px;
    -webkit-border-top-right-radius: 3px;
    border-top-right-radius: 3px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: ${props => (props.isGrid ? "0.8rem" : "1.1rem")};
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

     
    @media (max-width: 750px) {
        font-size: 0.8rem;
    }
`;

const Offline = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: white;
    text-shadow: 0px 0px 6px #000000;
    position: absolute;
    width: 100%;
    height: 100%;
`;

export default Restaurant;
