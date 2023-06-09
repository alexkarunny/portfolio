import React from 'react';
import styles from './Projects.module.css'
import commonStyles from '../../common/Common.module.css'
import {Project} from './Project/Project';

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${commonStyles.container} ${styles.projectsContainer}`}>
                <div className={styles.titles}>
                    <h5 className={commonStyles.subTitle}>Gallery</h5>
                    <h2 className={commonStyles.title}>Projects</h2>
                </div>
                <div className={styles.projectsContentContainer}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};
