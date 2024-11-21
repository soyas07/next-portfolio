"use client";

import React, { createContext, useState } from 'react'

// Create a context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark
    
    // The value that will be passed down via the context
    const globalState = {
        isDarkMode, 
        setIsDarkMode
    };

    return (
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    )
}