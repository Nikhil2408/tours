import React, {useState} from "react";

import styles from "../styles/Tour.module.css";

function Tour(props){

    const [readMore, setReadMore] = useState(false);

    function clickHandler(){
        setReadMore(!readMore);
    }

    return (
        <div className={styles.Tour}>
            {props.tour.image}
            <div className={styles.shortDesc_Price}>
                <p className={styles.shortDesc}>{props.tour.shortDesc}</p>
                <p className={styles.price}>$ {props.tour.price}</p>
            </div>
            {
                readMore 
                ? 
                <span className={styles.longDesc}>{props.tour.longDesc} <button className={styles.showless} onClick={clickHandler}>show less</button>
                </span> 
                : 
                <span className={styles.longDesc}>{props.tour.longDesc.slice(0, 200)}... <button className={styles.readmore} onClick={clickHandler}>read more</button>
                </span> 
            } 
            
            <button name={props.tour.id} onClick={props.deleteTour}>Not Interested</button>
        </div>
    )
}

export default Tour;