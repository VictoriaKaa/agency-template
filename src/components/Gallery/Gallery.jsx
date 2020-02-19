import React from 'react';
import Fade from 'react-reveal/Fade';
import Work from './Work/Work';
import styles from './Gallery.module.css'

const Gallery = (props) => {
    let worksElements = props.galleryData.map(p => <Work id={p.id} src={p.src} title={p.title} message={p.message} key={p.id} />)

    return (
        <>
            <div className={styles.galleryBlock}>
                <Fade duration={700}>
                    <div className={styles.pageTitle}>Latest Works</div>
                </Fade>
            </div>
            <Fade delay={700} duration={1500}>
                <div className={styles.gallery}>
                    {worksElements}
                </div>
            </Fade>
        </>
    );
}

export default Gallery;