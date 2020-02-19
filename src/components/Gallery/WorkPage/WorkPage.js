import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import styles from './WorkPage.module.css';

const WorkPage = (props) => {
    let [navigate, editNavigate] = useState(false);
    let goWorkPage = () => {
        editNavigate(true);
    }
    return (
        <div className={styles.galleryBlock}>
            <div className={styles.pageTitle}>Latest Works</div>
            <div className={styles.item}>
                <Fade left duration={1000}>
                    <img src={props.location.state.src} className={styles.work} />
                </Fade>
                <div className={styles.itemInner}>
                    <Fade right duration={1000}>
                        <div className={styles.itemTitle}>Name: {props.location.state.title}</div>
                        <div className={styles.itemMessage}>Description: {props.location.state.message}</div>
                    </Fade>
                </div>
            </div >
            <div className={styles.btnBLock}>
                <button className={styles.itemButton} onClick={goWorkPage}>Back</button>
                {navigate ?
                    <Redirect to='/gallery' /> : null}
            </div>
        </div>
    );
}

export default WorkPage;