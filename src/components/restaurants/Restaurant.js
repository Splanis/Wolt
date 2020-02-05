import React, { useContext } from "react";
import ProgressiveImage from "react-progressive-image";
import { Blurhash } from "react-blurhash";
import { LayoutContext } from "../context/LayoutContext";
import styled from "styled-components";

const Restaurant = ({ name, description, image, blurhash, delivery_price, tags, online }) => {
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

    // Getting the layout Style
    const [isGrid] = useContext(LayoutContext);

    // layoutProps so Components will know if style is grid or list
    let layoutProps = {};
    if (isGrid) {
        layoutProps.isGrid = isGrid;
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
                <RestaurantDetails {...layoutProps}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </RestaurantDetails>
                <RestaurantInfo {...layoutProps}>
                    Delivery: {delivery_price / 100}€
                    <RestaurantTags {...layoutProps}>
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

// Components' style
const RestaurantCard = styled.div`
    display: flex;
    flex-direction: ${props => (props.isGrid ? "column" : "row")};
    width: ${props => (props.isGrid ? "340px" : "1100px")};
    height: ${props => (props.isGrid ? "380px" : "120px")};
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 10px;

    &:hover {
        cursor: pointer;
    }

    &:hover img {
        transform: scale(1.05);
    }

    @media (max-width: 735px) {
        flex-direction: column;
        min-width: 340px;
        max-width: 340px;
        height: 380px;
    }
`;

const RestaurantImage = styled.div`
    width: ${props => (props.isGrid ? "100%" : "200px")};
    min-height: ${props => (props.isGrid ? "260px" : "120px")};
    overflow: hidden;
    border-radius: ${props => (props.isGrid ? "3px 3px 0 0" : "3px 0 0 3px")};
    position: relative;
    display: flex;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 3px 3px 0 0;
        transition: all 0.5s;
    }

    @media (max-width: 735px) {
        width: 100%;
        min-height: 260px;
        border-radius: 3px 3px 0 0;
    }
`;

const RestaurantContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: ${props => (props.isGrid ? "column" : "row")};
    text-align: center;

    @media (max-width: 735px) {
        flex-direction: column;
    }
`;

const RestaurantDetails = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: ${props => (props.isGrid ? "1.4rem" : "1.7rem")};
        margin: ${props => (props.isGrid ? "auto" : "5px")};
        padding-top: ${props => (props.isGrid ? "3px" : "0")};
    }

    p {
        font-size: ${props => (props.isGrid ? "1.1rem" : "1.3rem")};
        margin: ${props => (props.isGrid ? "auto" : "5px")};
        padding-bottom: ${props => (props.isGrid ? "3px" : "0")};
    }

    @media (max-width: 735px) {
        h2 {
            font-size: 1.4rem;
            padding-top: 3px;
        }

        p {
            font-size: 1.1rem;
            padding-bottom: 3px;
        }

        h2,
        p {
            margin: auto;
        }
    }
`;

const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: ${props => (props.isGrid ? "row" : "column")};
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: #4d4d4d;
    font-size: ${props => (props.isGrid ? "0.95rem" : "1.1rem")};
    background-color: #f6f6f6;
    width: 100%;
    flex: 1;

    @media (max-width: 735px) {
        font-size: 0.95rem;
        flex-direction: row;
    }
`;

const RestaurantTags = styled.div`
    display: flex;
    flex-direction: ${props => (props.isGrid ? "row" : "column")};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 735px) {
        flex-direction: row;
    }
`;

const Tag = styled.p`
    height: 24px;
    line-height: 24px;
    position: relative;
    margin-left: 15px;
    margin-top: ${props => (props.isGrid ? "0" : "5px")};
    padding: 0 5px 0 10px;
    background: #333333;
    -webkit-border-bottom-right-radius: 3px;
    border-bottom-right-radius: 3px;
    -webkit-border-top-right-radius: 3px;
    border-top-right-radius: 3px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: ${props => (props.isGrid ? "0.8rem" : "0.9rem")};
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

    @media (max-width: 735px) {
        font-size: 0.8rem;
        margin-top: 0;
    }
`;

const Offline = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: white;
    text-shadow: 0px 0px 20px #000000;
    position: absolute;
    width: 100%;
    height: 100%;
`;

export default Restaurant;
