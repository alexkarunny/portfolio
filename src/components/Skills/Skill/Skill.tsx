import React from 'react';
import styles from './Skill.module.css'


type PropsType = {
    title: string
    icon: string
    description: string
}

export const Skill = (props: PropsType) => {
    const {title, icon, description} = props

    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={icon} alt="icon"/>
            </div>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
        </div>
    );
};
