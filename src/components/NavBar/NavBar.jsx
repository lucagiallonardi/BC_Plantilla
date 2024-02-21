import React, {useEffect, useState} from 'react';
import styles from './NavBar.module.css';
import { IconArrowUp } from '@tabler/icons-react';
import logo from '../../img/logo.jpg';

const NavBar = () => {
    const [scroll, setScroll] = useState(0);
    const[scrollUp, setScrollUp] = useState(false);

    
    useEffect(()=>{
        const handleScroll = ()=>{
            const currentScroll = window.scrollY;
            const isScrollingUp = currentScroll < scroll;
            setScroll(currentScroll);

            if(isScrollingUp){
                setScrollUp(true);
            } else{
                setScrollUp(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    return (
        <div>
       <div className={scrollUp ? styles.navBarContainer : styles.navBarContainerNone}>
        <div><a href='/'><img className={styles.logoImg} src={logo} alt='logo'/></a></div>
        <ul className={styles.navBarList}>
            <li className={styles.navBarItem}><a href='#quienes-somos'>¿Quienes Somos?</a></li>
            <li className={styles.navBarItem}><a href='#servicios'>Servicios</a></li>
            <li className={styles.navBarItem}><a href='#galeria'>Galeria</a></li>
            <li className={styles.navBarItem}><a href='#clientes'>Nuestros Clientes</a></li>
            <li className={styles.navBarItem}><a href='#socios'>Socios</a></li>
            <li className={styles.navBarItem}><a href='#contacto'>Contacto</a></li>
        </ul>
       </div>

    <div className={scroll === 0 ? styles.arrowUpNone : styles.arrowUp}>
       <IconArrowUp className={styles.arrowUpIcon} onClick={scrollToTop}/>
    </div>
    </div>
    );
};

export default NavBar;