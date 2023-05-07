import React from 'react';
import styles from './Skill.module.css'
import icon from '../../../content/icons/css3-40.png'

export const Skill = () => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={icon} alt=""/>
            </div>
        </div>
    );
};
