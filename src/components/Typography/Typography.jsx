import React from 'react'
import styles from './typography.module.scss'

const Typography = ({ text, type="h1", customClass=null, customStyle }) => {
    if (type == "h1")
        return <h1 className={`${customClass} ${styles.fontH1}`} style={customStyle}>{text}</h1>
    else if (type == "h2")
        return <h2 className={`${customClass} ${styles.fontH2}`} style={customStyle}>{text}</h2>
    else if (type == "h3")
        return <h3 className={`${customClass} ${styles.fontH3}`} style={customStyle}>{text}</h3>
    else if (type == "h4")
        return <h4 className={`${customClass} ${styles.fontH4}`} style={customStyle}>{text}</h4>
    else if (type == "p")
        return <p className={`${customClass} ${styles.fontP}`} style={customStyle}>{text}</p>
}

export default Typography