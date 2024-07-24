import React from 'react';
import styles from "../../styles/CardDetails.module.css"

function CardDetails({Categoriesid}) {
    const {id, title, price, category, image , description} = Categoriesid.Categoriesid;

    return (
        <div className={styles.container}>
            <img src={image} alt="img" className={styles.image} />
            <h3 className={styles.header}>
                {title}
            </h3>
            <div className={styles.details}>
                <div>
                    <p>category</p>
                    <span>{category}</span>
                </div>
            </div>
            <div className={styles.details}>
                <p className={styles.descriptionTitle}>Extra Information</p>
                <p className={styles.descriptionText}>{description}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.price}>
                    <p>Price:</p>
                    <span>{price}</span>
                </div>
            </div>
            <button className={styles.button}>Buy</button>
        </div>

    );
}

export default CardDetails;