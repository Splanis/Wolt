import React from "react";
import styled from "styled-components";
import slide1 from "../assets/slideshow/slide1.jpg";
import slide2 from "../assets/slideshow/slide2.jpg";
import slide3 from "../assets/slideshow/slide3.jpg";
import slide4 from "../assets/slideshow/slide4.jpg";
import { Slide } from "react-slideshow-image";

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrow: false,
    indicators: false
};

const Slideshow = () => {
    // return <div><Slide src={slide1} alt=""></Slide></div>;
    return (
        <SlideContain>
            <Slide {...properties} style={{ display: "flex"}}>
                <div style={{ margin: "0", padding: "0" }}>
                    <img src={slide1} alt="" style={{ width: "1080px", maxHeight: "600px" }} />
                </div>
                <div>
                    <img src={slide2} alt="" style={{ width: "1080px", maxHeight: "600px" }} />
                </div>
                <div>
                    <img src={slide3} alt="" style={{ width: "1080px", maxHeight: "600px" }} />
                </div>
                <div>
                    <img src={slide4} alt="" style={{ width: "1080px", maxHeight: "600px" }} />
                </div>
            </Slide>
        </SlideContain>
    );
};

export default Slideshow;

const SlideContain = styled.div`
    /* padding: 0 10px; */
    padding-top: 70px;
    width: 100%;
`;
