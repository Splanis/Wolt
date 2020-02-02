import React from "react";
import { RestaurantsProvider } from "./components/RestaurantsContext";
import Navbar from "./components/layout/Navbar";
import Restaurants from "./components/Restaurants";
import Footer from "./components/layout/Footer";
import GlobalStyles from "./components/sharedStyles/GlobalStyles";
import styled from "styled-components";

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
`;

export default App;
