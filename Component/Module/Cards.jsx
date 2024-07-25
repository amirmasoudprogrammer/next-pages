import React from 'react';
import Link from "next/link";
import styles from "../../styles/Cards.module.css"
import spiltitems from "../../helper/spilt";


function Cards(props) {
    const {id, title, price, category, image} = props;
    return (
        <div className={styles.main}>
            <Link href={`/categories/${id}`}>
                <div className={styles.images}>
                    <img src={image} alt="image"/>
                </div>
                <div className={styles.itemtitles}>
                    <p>{spiltitems(title)}</p>
                    <span>{category}</span>
                </div>
                <div className={styles.price}>
                    <span>${price}</span>
                </div>
            </Link>
        </div>
    );
}

export default Cards;