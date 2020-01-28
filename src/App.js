import React from "react";
import "./assets/styles/App.scss";
import { RestaurantsProvider } from "./components/RestaurantsContext";
import Restaurants from "./components/Restaurants";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
    return (
        <RestaurantsProvider>
            <div className="App">
                <Navbar />
                <main>
                    <Restaurants />
                </main>
                <Footer />
            </div>
        </RestaurantsProvider>
    );
};

export default App;
