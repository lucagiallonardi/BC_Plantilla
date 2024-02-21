import React, {useState} from "react";
import styles from './GalleryCard.module.css';
import img from '../../img/about.jpg';
import {IconPlus} from '@tabler/icons-react';

const GalleryCard = ()=>{
    const [clicked, setClicked] = useState(false);

    const handleClick = ()=>{
        setClicked(!clicked);
    }

    return(
        <div>
        
        <div className={styles.imgCardContainer}>
            <div><img className={styles.imgCard} src={img} alt="foto de paneles solares"/></div>
            <div className={styles.imgCardHover}><div className={styles.imgBoton} onClick={handleClick}><IconPlus className={styles.eyeBoton}/></div></div>
        </div>
        <div className={clicked ? styles.imgOpen : styles.imgClosed}>
        <div className={styles.imgOpenBackground} onClick={handleClick}></div>
        <img src={img} className={styles.imgOpenimg} alt="foto de paneles solares"/>
        </div>
        </div>
    )
}

export default GalleryCard;