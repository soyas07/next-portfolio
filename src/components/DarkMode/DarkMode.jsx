"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./darkmode.module.scss";
import { GlobalContext } from "src/context/GlobalContext";

const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

const DarkMode = () => {
    const { setIsDarkMode, isDarkMode } = useContext(GlobalContext);

    useEffect(() => {
        // Check saved theme or system preference on mount
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (storedTheme === "light") {
            setLight();
            setIsDarkMode(false);
        } else if (storedTheme === "dark" || (storedTheme === null && prefersDark)) {
            setDark();
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            setLight();
            setIsDarkMode(false);
        } else {
            setDark();
            setIsDarkMode(true);
        }
    };

    return (
        <div className={styles.toggleThemeWrapper} onClick={toggleTheme}>
            <div className={styles.iconWrapper}>
                {isDarkMode ? (
                    <span key="moon" className={styles.icon}>🌒</span>
                ) : (
                    <span key="sun" className={styles.icon}>☀️</span>
                )}
            </div>
        </div>
    );
};

export default DarkMode;
