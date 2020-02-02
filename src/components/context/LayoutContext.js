import React, { useState, createContext } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = props => {
    const [isGrid, setGrid] = useState(true);
    
    return (
        <LayoutContext.Provider value={[isGrid, setGrid]}>
            {props.children}
        </LayoutContext.Provider>
    );
};
