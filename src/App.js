import React from "react";
import { RestaurantsProvider } from "./components/contexts/RestaurantsContext";
import { LayoutProvider } from "./components/contexts/LayoutContext";
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
                            <Divider />
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
    padding: 25px 15px 0 15px;
`;

const Divider = styled.hr`
    margin: 0 20px 20px 20px;
    color: rgba(0, 0, 0, 0.6);
    width: 100%;
`;

export default App;
