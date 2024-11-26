import React from 'react'
import styles from './article.module.scss'
import Typography from '../Typography/Typography'

const Article = ({ title="", desc="", customStyle }) => {
    return (
        <article className={styles.articleContainer} style={customStyle}>
            <Typography
                text={`${title}`}
                type='h4'
                customStyle={{marginBottom:"25px",listStyle:'inside'}}
            />
            <Typography
                text={desc}
                type='p'
                customStyle={{fontSize:"1rem",fontWeight:"300",lineHeight:"25px"}}
            />
        </article>
    )
}

export default Article