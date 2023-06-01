import React, {useState} from 'react';
import styles from './Project.module.css'
import fon from '../../../content/img/2.png'
import commonStyles from '../../../common/Common.module.css'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

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
                <img src={fon} alt="" className={styles.picture}/>
            </div>
            <div className={finalClass}>
                <h4 className={styles.title}>It-incubator</h4>
                <p className={styles.description}>Lorem ipsum dolor sit amet</p>
                <div className={`${commonStyles.icon} ${styles.icon} `}>
                    <Link to={'https://karchershop.by/product/rm-519-sredstvo-dlya-ochistki-kovrov-3v1/'}>
                        <FontAwesomeIcon icon={faEye} fade style={{color: "#ff508e",}} />
                    </Link>

                </div>
            </div>
        </div>
    );
};

