import React from 'react';
import styles from './Nav.module.css'
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to={'/home'} className={({isActive})=> isActive ? styles.active : ' '}>Home</NavLink>
            <NavLink to={'/skills'} className={({isActive})=> isActive ? styles.active : ' '}>Skills</NavLink>
            <NavLink to={'/projects'} className={({isActive})=> isActive ? styles.active : ' '}>Projects</NavLink>
            <NavLink to={'/contact'} className={({isActive})=> isActive ? styles.active : ' '}>Contact</NavLink>
        </nav>
    );
};
