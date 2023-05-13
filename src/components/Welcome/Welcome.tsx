import React from 'react';
import styles from './Welcome.module.css'
import commonStyles from '../../common/Common.module.css'
import foto from '../../content/img/foto.png'

export const Welcome = () => {
    return (
        <div className={styles.welcomeBlock}>
            <div className={`${commonStyles.container} ${styles.welcomeContainer}`}>
                <div className={styles.photo}>
                    <img src={foto} alt=""/>
                </div>
                <div className={styles.about}>
                    <h5 className={commonStyles.subTitle}>About</h5>
                    <h2 className={commonStyles.title}>Hi there, I'm <span className={styles.name}>Alex Karunny</span></h2>
                    <span className={styles.occupation}>Front-end developer based in Minsk </span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi, et incidunt neque
                        numquam omnis quod rerum sint soluta Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, architecto blanditiis consectetur consequuntur dolorem <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur eius enim et facere illum laboriosam placeat praesentium quam similique?</p>
                </div>
            </div>
        </div>
    );
};
