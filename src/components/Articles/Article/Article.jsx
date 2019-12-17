import React from 'react';
import styles from './Article.module.css';
import post1 from '../../../img/post1-compressor.png';

const Article = (props) => {
    let image = null;
    if (props.image) {
        image = (<img src={props.image} />)
    } else {
        image = (<img src={post1} />);
    }
    return (
        <div className={styles.item}>
            {image}
            <div className={styles.itemBlock}>
                <div className={styles.title}>
                    <div className={styles.date}>
                        <div className={styles.day}>{props.day}</div>
                        <div className={styles.month}>{props.month}</div>
                    </div>
                    <div className={styles.itemTitle}>{props.title}</div>
                </div>
                <div className={styles.itemText}>{props.text}</div>
            </div>
        </div >
    );
}

export default Article;