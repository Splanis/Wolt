import React from "react";
import { RestaurantsProvider } from "./components/context/RestaurantsContext";
import { LayoutProvider } from "./components/context/LayoutContext";
import Navbar from "./components/layout/Navbar";
import Restaurants from "./components/restaurants/Restaurants";
import Footer from "./components/layout/Footer";
import Header from "./components/header/Header";
import GlobalStyles from "./components/sharedStyles/GlobalStyles";
import styled from "styled-components";

const App = () => {
    return (
            <React.Fragment>
                <GlobalStyles />
                <Navbar />  
                <Container>
                    <RestaurantsProvider>
                        <LayoutProvider>
                            <Header />
                            <Restaurants />
                        </LayoutProvider>
                    </RestaurantsProvider>
                </Container>
                <Footer />
            </React.Fragment>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    max-width: 1110px;
`;

export default App;
