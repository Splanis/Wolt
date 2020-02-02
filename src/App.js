import React from "react";
import { RestaurantsProvider } from "./components/RestaurantsContext";
import Navbar from "./components/layout/Navbar";
import Restaurants from "./components/Restaurants";
import Footer from "./components/layout/Footer";
import styled from "styled-components";
import GlobalStyles from "./components/SharedStyles/GlobalStyles";

const App = () => {
    return (
        <RestaurantsProvider>
            <GlobalStyles />
            <Navbar />  
            <Container>
                <Restaurants />
            </Container>
            <Footer />
        </RestaurantsProvider>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 1110px;
    padding-top: 80px;
`;

export default App;
