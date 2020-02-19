import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import styles from './StartPage.module.css';

const StartPage = (props) => {
    let [navigate, editNavigate] = useState(false);
    let getStarted = () => {
        editNavigate(true);
    }
    return (
        <div className={styles.welcomeBlock}>
            <Fade top >
                <div className={styles.welcome}>Welcome to Startup</div>
                <div className={styles.welcomeText}>Your Favourite Creative Agency Template</div>
            </Fade>
            <Zoom delay={500}>
                <button type="button" className={styles.welcomeBtn} onClick={getStarted}>Get Started</button>
                </Zoom>
                {navigate ? <Redirect to='/services' /> : null}
        </div>
    );
}

export default StartPage;