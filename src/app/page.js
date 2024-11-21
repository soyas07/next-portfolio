"use client";

import { useContext } from "react";
import Button from "src/components/Button/Button";
import NavBar from "src/components/NavBar/NavBar";
import Typography from "src/components/Typography/Typography";
import { GlobalContext, GlobalProvider } from "src/context/GlobalContext";


export default function Home() {
    const { isDarkMode } = useContext(GlobalContext);

    const getArrowIconBtn = isDarkMode ? "/assets/icons/down-arrow.svg" : "/assets/icons/down-arrow-dark.svg"

    return (
        <main className="main-container">
            <NavBar />
            <section className="hero-section-1">
                <Typography 
                    text="Websites&"
                    customStyle={{fontWeight:'700'}}
                />
                <Typography 
                    text="Branding" 
                    customStyle={{fontWeight:'700'}}
                />
            </section>
            <section className="hero-section-2">
                <Button 
                    text="SCROLL DOWN" 
                    icon={getArrowIconBtn}
                />
            </section>
        </main>
    );
}
