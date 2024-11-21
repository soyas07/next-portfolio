"use client";

import React, { useContext, useEffect, useState } from 'react'
import styles from './navbar.module.scss'
import DarkMode from '../DarkMode/DarkMode';
import { GlobalContext } from 'src/context/GlobalContext';

const NavBar = () => {
    // global context states
    const { isDarkMode } = useContext(GlobalContext);

    const [isMobile, setIsMobile] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false); // New state to track initialization 

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 550px)');
        const handleResize = () => setIsMobile(mediaQuery.matches);

        // Set initial value
        handleResize();
        setIsInitialized(true); // Mark initialization as complete

        // Add listener
        mediaQuery.addEventListener('change', handleResize);

        // Cleanup listener on unmount
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    // check the logo for dark and light mode
    const logoMode = (!isDarkMode) ? "/assets/icons/Logo-dark.svg" : "/assets/icons/Logo.svg";

    return (
        <nav className={isMobile ? 'flex' : null}>
            <img src={logoMode} alt="logo" id={styles.logo} style={isMobile ? null : {width:"91px",height:"32px",margin:'auto',width:'100%'}} />
            {isMobile && <DarkMode />}
            {isMobile && <img src="/assets/icons/_Nav_menu_button.svg" id={styles.navMenu} alt="menu"/>}
            {!isMobile && isInitialized && 
                <>
                    <ul className={`${styles.navMenuLists} flex`}>
                        <li className={styles.active}>Home</li>
                        <li><span>20</span>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                        <span style={{marginRight:'1.2rem',marginBottom:'.3rem'}}><DarkMode /></span>
                    </ul>
                </>
            }
        </nav>
    )
}

export default NavBar