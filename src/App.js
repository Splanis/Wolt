import React from "react";
import "./App.css";
import { RestaurantsProvider } from "./components/RestaurantsContext";
import RestaurantList from "./components/RestaurantList";

const App = () => {
    return (
        <RestaurantsProvider>
            <div className="App">
                <h1>Wolt</h1>
                <RestaurantList />
            </div>
        </RestaurantsProvider>
    );
};

export default App;
