import React from "react";
import "./assets/styles/App.scss";
import { RestaurantsProvider } from "./components/RestaurantsContext";
import RestaurantList from "./components/RestaurantList";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
    return (
        <RestaurantsProvider>
            <div className="App">
                <Navbar />
                <main>
                    <RestaurantList />
                </main>
                <Footer />
            </div>
        </RestaurantsProvider>
    );
};

export default App;
