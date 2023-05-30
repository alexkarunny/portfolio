import React, {useState} from 'react';
import styles from './Project.module.css'
import {Link} from 'react-router-dom';
import fon from '../../../content/img/2.png'

export const Project = () => {

    const [isVisible, setVisible] = useState<boolean>(false)

    const mouseOnHandler = () => {
        setVisible(true)
    }

    const mouseLeaveHandler = () => {
        setVisible(false)
    }


    const finalClass = `${styles.descriptionContainer} 
    ${isVisible ? styles.descriptionContainerVisible : ''}
    `


    return (
        <div className={styles.projectContainer} onMouseMove={mouseOnHandler} onMouseLeave={mouseLeaveHandler}>
            <div className={styles.pictureContainer}>
                <Link to={'https://www.kinopoisk.ru/media/article/4007813/?from_block=editorial_choice'} className={styles.link}>
                    <img src={fon} alt="" className={styles.picture}/>
                </Link>
            </div>
            <div className={finalClass}>
                <h4 className={styles.title}>It-incubator</h4>
                <p className={styles.description}>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    );
};

