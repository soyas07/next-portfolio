import React from 'react'
import styles from './typography.module.scss'

const Typography = ({ text, type="h1", customClass=null, customStyle }) => {
    if (type == "h1")
        return <h1 className={`${customClass} ${styles.fontH1}`} style={customStyle}>{text}</h1>
    else if (type == "h2")
        return <h2 className={`${customClass} ${styles.fontH2}`} style={customStyle}>{text}</h2>
}

export default Typography