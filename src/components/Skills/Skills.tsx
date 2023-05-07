import React from 'react';
import styles from './Skills.module.css'
import commonStyles from '../../common/Common.module.css'
import {Skill} from './Skill/Skill';

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${commonStyles.container} ${styles.skillsContainer}`}>
                <div className={styles.titles}>
                    <h5 className={commonStyles.subTitle}>Skills</h5>
                    <h2 className={commonStyles.title}>Why Choose My Services</h2>
                </div>
                <div className={styles.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

