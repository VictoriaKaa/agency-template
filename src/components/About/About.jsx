import React from 'react';
import styles from './About.module.css';
import MultipleSlider from '../common/MultipleSlider/MultipleSlider';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const About = (props) => {
  let aboutElements = props.aboutData.map(p => <div>{p.text}</div>)
  let photoElements = props.aboutUs.map(p =>
    <Fade delay={300} duration={1000}>
    <div className={styles.card}>
      <img src={p.image} className={styles.photo} />
      <div className={styles.about__contact}>
        <div className={styles.facebook}></div>
        <div className={styles.twitter}></div>
        <div className={styles.google}></div>
        <div className={styles.linkedin}></div>
      </div>
      <div className={styles.name}>{p.name}</div>
      <div className={styles.position}>{p.position}</div>
    </div>
    </Fade>);

  return (
    <div className={styles.aboutBlock}>
      <Fade duration={1000}>
        <div className={styles.pageTitle}>About Us</div>
      </Fade>
      <div className={styles.aboutText}>
        {aboutElements}
      </div>
      <MultipleSlider elements={photoElements} />
    </div>
    );
}
      
      
      
      
export default About;