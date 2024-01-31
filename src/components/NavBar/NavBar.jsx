import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
       <div className={styles.navBarContainer}>
        <div>Logo</div>
        <ul className={styles.navBarList}>
            <li className={styles.navBarItem}>¿Quienes Somos?</li>
            <li className={styles.navBarItem}>Servicios</li>
            <li className={styles.navBarItem}>Galeria</li>
            <li className={styles.navBarItem}>Nuestros Clientes</li>
            <li className={styles.navBarItem}>Socios</li>
            <li className={styles.navBarItem}>Contacto</li>
        </ul>
       </div>
    );
};

export default NavBar;