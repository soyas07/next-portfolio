"use client";

import React, { useContext } from "react";
import Article from "src/components/Article/Article";
import Banner from "src/components/Banner/Banner";
import Button from "src/components/Button/Button";
import Card from "src/components/Card/Card";
import NavBar from "src/components/NavBar/NavBar";
import Typography from "src/components/Typography/Typography";
import { GlobalContext } from "src/context/GlobalContext";


export default function Home() {
    const { isDarkMode } = useContext(GlobalContext);

    const getArrowIconBtn = isDarkMode ? "/assets/icons/down-arrow.svg" : "/assets/icons/down-arrow-dark.svg";
    const getSideArrowIconBtn = isDarkMode ? "/assets/icons/side-arrow.svg" : "/assets/icons/side-arrow-dark.svg";

    // list all the cards
    const ListCards = () => {
        const cards = [
            {
                title: "Crtly",
                subtitle: "Mobile App",
                img: "/assets/imgs/Card-1.svg"
            },
            {
                title: "Tansto",
                subtitle: "Web Design",
                img: "/assets/imgs/Card-2.svg"
            },
            {
                title: "Senta",
                subtitle: "Mobile App & Branding",
                img: "/assets/imgs/Card-3.svg"
            },
            {
                title: "Crint",
                subtitle: "Mobile App",
                img: "/assets/imgs/Card-4.svg"
            },
        ];

        const allCards = cards.map((item,index) => {
            return (
                <React.Fragment key={index}>
                    <Card
                        title={item.title}
                        subtitle={item.subtitle}
                        img={item.img}
                        customStyle={{marginBottom:'35px'}}
                    />
                </React.Fragment>
            )
        })

        return allCards;
    }

    // list all expertise
    const ListExpertise = () => {
        const skills = [
            {
                title: ".Branding",
                desc: "Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept."
            },
            {
                title: ".UI Design",
                desc: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
            },
            {
                title: ".UX Design",
                desc: "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements."
            },
            {
                title: ".Development",
                desc: "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites."
            }
        ];

        const allExpertise = skills.map((item,index) => (
            <React.Fragment key={index}>
                <Article 
                    title={item.title}
                    desc={item.desc}
                    customStyle={{marginBottom:'30px',maxWidth:"450px"}}
                />
            </React.Fragment>
        ))

        return allExpertise;
    }
    

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
            <section className="intro-section flex">
                <div className="intro-subsection-1">
                    <Typography 
                        text="Let's Talk"
                        type="h4"
                        customStyle={{marginBottom:'1rem'}}
                    />
                    <Typography
                        text="hello@joey.co"
                        type="p"
                    />
                </div>
                <div className="intro-subsection-2">
                    <Typography
                        text="Hello, I'm Joey, an online product designer focusing on brand identity, advertising, and no-code instruments."
                        type="p"
                        customStyle={{lineHeight:"35px"}}
                    />
                </div>
            </section>
            <section className="project-section">
                <div className="project-subsection-1  flex">
                    <Typography
                        text="Projects"
                        type="h3"
                    />
                    <span className="project-subsection-1-item flex" style={{cursor:'pointer'}}>
                        <Typography 
                            text="More"
                            type="p"
                            customStyle={{fontWeight:'500'}}
                        />
                        <img src={getSideArrowIconBtn} alt="more" style={{marginLeft:'.4rem',marginTop:'.2rem'}} />
                    </span>
                </div>
                <div className="project-subsection-2">
                    <Typography 
                        text="As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies."
                        type="p"
                        customStyle={{fontWeight:"500",lineHeight:"35px",fontSize:"1.3rem"}}
                    />
                </div>
                <div className="project-subsection-3">
                    <ListCards />
                </div>
            </section>
            <Typography
                text="Expertise"
                type="h3"
                customStyle={{marginBottom:'35px'}}
            />
            <section className="article-section">
                <ListExpertise />
            </section>
            <section className="banner-section">
                <Banner 
                    text="Graphic layout of online interactions"
                />
            </section>
            <section className="testimonials-section">
                <Article 
                    title="Testimonials"
                    desc="“Joey is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”"
                />
                <div className="testimonials-section-2">
                    <Typography
                        type="p"
                        text="Chris Ellington"
                        customStyle={{fontSize:".8rem",marginBottom:'.5rem'}}                    
                    />
                    <Typography
                        type="p"
                        text="Product Lead,Gatha."
                        customStyle={{fontSize:".8rem"}}
                    />
                </div>
            </section>
            <section className="cta-section">
                <Typography 
                    text="Let's talk!"
                    type="h2"
                    customStyle={{marginBottom:'2rem'}}
                />
                <Button 
                    text="hello@joey.co"
                    icon="/assets/icons/cta-icon.svg"
                    customStyle={{margin:'0',padding: "0.9rem 2rem"}}
                    customId='custom-btn'
                />
            </section>
            <footer>
                <section style={{marginBottom:'2rem'}}>
                    <Typography 
                        type="p"
                        text="2025 &copy; &mdash; Made by NepSites"
                        customStyle={{fontSize:'.8rem'}}
                    />
                </section>
                <section style={{marginBottom:'2rem'}}>
                    <span className="social-footer">
                        <Typography
                            type="p"
                            text="Dribble"
                            customStyle={{fontSize:'.8rem'}}
                        />
                        <Typography
                            type="p"
                            text="Instagram"
                            customStyle={{fontSize:'.8rem'}}
                        />
                        <Typography
                            type="p"
                            text="LinkedIn"
                            customStyle={{fontSize:'.8rem'}}
                        />
                    </span>
                </section>
            </footer>
        </main>
    );
}
