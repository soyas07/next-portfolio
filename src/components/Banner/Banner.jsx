import React from 'react';
import styles from './banner.module.scss';
import Typography from '../Typography/Typography';

const Banner = ({ text = "" }) => {
    return (
        <marquee behavior="scroll" direction="left" scrollamount="15" className={styles.container}>
            {/* Repeat the text twice to create a seamless effect */}
            <Typography 
                type="h2"
                text={text}
                customStyle={{color:"white"}}
            />
        </marquee>
    );
};

export default Banner;
