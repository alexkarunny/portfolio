import React from 'react';
import styles from './Header.module.css'
import {Nav} from '../Nav/Nav';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.containerHeader}>
                <Nav/>
            </div>
        </div>
    );
};

