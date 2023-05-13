import React from 'react';
import styles from './Skills.module.css'
import commonStyles from '../../common/Common.module.css'
import {Skill} from './Skill/Skill';
import icon from '../../../src/content/icons/css3-40.png'

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${commonStyles.container} ${styles.skillsContainer}`}>
                <div className={styles.titles}>
                    <h5 className={commonStyles.subTitle}>Skills</h5>
                    <h2 className={commonStyles.title}>Why Choose My Services</h2>
                </div>
                <div className={styles.skills}>
                    <Skill title={'CSS3'} icon={icon} description={'I have been providing web design services with great success for 9 years. The client is very happy'}/>
                    <Skill title={'CSS3'} icon={icon} description={'I have been providing web design services with great success for 9 years. The client is very happy'}/>
                    <Skill title={'CSS3'} icon={icon} description={'I have been providing web design services with great success for 9 years. The client is very happy'}/>

                </div>
            </div>
        </div>
    );
};

