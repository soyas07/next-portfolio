import React from 'react'
import styles from './card.module.scss'
import Typography from '../Typography/Typography'

const Card = ({ title="", subtitle="", img=null, customStyle }) => {
    return (
        <div className={styles.cardContainer} style={customStyle}>
            <div className={styles.imgContainer}>
                <img src={img} alt="post" width="100%" height="100%" />
            </div>
            <Typography 
                text={title}
                type='h4'
            />
            <Typography 
                text={subtitle}
                type='h4'
                customStyle={{fontWeight:'400'}}
            />
        </div>
    )
}

export default Card