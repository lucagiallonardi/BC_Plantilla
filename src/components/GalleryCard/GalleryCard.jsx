import React, {useState} from "react";
import styles from './GalleryCard.module.css';


const GalleryCard = ()=>{
    const [clicked, setClicked] = useState(false);

    const handleClick = ()=>{
        setClicked(!clicked);
    }

    return(
        <div>
        
        <div className={styles.imgCardContainer}>
            <div className={styles.imgCard}></div>
            <div className={styles.imgCardHover}><div className={styles.imgBoton} onClick={handleClick}></div></div>
        </div>
        <div className={clicked ? styles.imgOpen : styles.imgClosed}>
        <div className={styles.imgOpenBackground} onClick={handleClick}></div>
        <div className={styles.imgOpenimg}></div>
        </div>
        </div>
    )
}

export default GalleryCard;