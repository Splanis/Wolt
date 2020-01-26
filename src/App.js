import React from "react";
import "./App.scss";
import { RestaurantsProvider } from "./components/RestaurantsContext";
import RestaurantList from "./components/RestaurantList";
import Navbar from "./components/layout/Navbar";

const App = () => {
    return (
        <RestaurantsProvider>
            <div className="App">
                <Navbar />
                <main>
                    <RestaurantList />
                </main>
            </div>
        </RestaurantsProvider>
    );
};

export default App;
