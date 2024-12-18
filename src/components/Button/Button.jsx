import React from 'react'
import styles from './button.module.scss'

const Button = ({ text="", icon=null, type="primary", imgWidth="15px", imgHeight="17px", customStyle=null, customId=null }) => {
    if (type == "primary")
        return (
            <button className={`${styles.btn} ${styles.primary}`} style={customStyle} id={`${customId}`}>
                {text}
                {icon && <img src={icon} alt="icon" width={imgWidth} height={imgHeight} style={{marginLeft:'.3rem'}} />}
            </button>
        )
    else if (type == "secondary")
        return (
            <button className={`${styles.btn} ${styles.secondary}`} style={customStyle} id={`${customId}`}>
                {text}
                {icon && <img src={icon} alt="icon" width={imgWidth} height={imgHeight} style={{marginLeft:'.3rem'}} />}
            </button>
        )
}

export default Button