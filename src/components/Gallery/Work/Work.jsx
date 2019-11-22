import React, { useState } from 'react';
import styles from './Work.module.css';
import { Redirect } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import WorkPage from '../WorkPage/WorkPage';

const Work = (props) => {
    let [navigate, editNavigate] = useState(false);
    let goWorkPage = () => {
        editNavigate(true);
    } 
    return (
        <div className={styles.item}>
            <img src={props.src} />
            <div className={styles.itemText}>
                <div className={styles.itemInner}>    
                    <div className={styles.itemTitle}>{props.title}</div>
                    <div className={styles.itemMessage}>{props.message}</div>
                    <button className={styles.itemButton} onClick={goWorkPage}>View</button>
                    {navigate ? 
            <Redirect to={{pathname:'/gallery/page',
                            state: { src: props.src, title: props.title, message: props.message }}} /> : null}
                </div>
            </div>
        </div >
    );
}

export default Work;