import React from "react";
import styles from './ClientCard.module.css';

const ClientCard = ()=>{
    return(
        <div className={styles.clientCardContainer}>
            <img src="data:image/jpeg;base64,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" alt=""/>
            <h2>Juance</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, qui.</h3>
            <button>VER MAS</button>
        </div>
    );
}

export default ClientCard;