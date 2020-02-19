import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import styles from './Services.module.css';

const Services = (props) => {
    let [navigate, editNavigate] = useState(false);
    let getInTouch = () => {
        editNavigate(true);
    }
    let servicesElements = props.servicesData.map(p =>
        <div key={p.id}>
            <div className={styles[p.content]}></div>
            <div className={styles.cardTitle}>{p.title}</div>
            <div className={styles.cardText}>{p.text}</div>
        </div>)

    return (
        <>
            <div className={styles.servicesBlock}>
                <Fade top duration={700}>
                    <div className={styles.pageTitle}>Services</div>
                </Fade>
                <Zoom delay={800} duration={2000}>
                    <div className={styles.services}>
                        {servicesElements}
                    </div>
                </Zoom>
            </div>
            <div className={styles.contactBlock}>
                <Fade bottom duration={700}>
                    <div className={styles.innerContact}>
                        <div class={styles.actionText}>
                            Do you like OUR WORK so far? <br />
                            Let's talk about YOUR PROJECT!
                        </div>
                        <button type="button" class={styles.contactBtn} onClick={getInTouch} >Get in touch</button>
                        {navigate ? <Redirect to='/contacts' /> : null}
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default Services;