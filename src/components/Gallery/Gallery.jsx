import React from 'react';
import styles from './Gallery.module.css'
import Work from './Work/Work';
import Fade from 'react-reveal/Fade';

const Gallery = (props) => {
    let worksElements = props.galleryData.map(p => <Work id={p.id} src={p.src} title={p.title} message={p.message} />)

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