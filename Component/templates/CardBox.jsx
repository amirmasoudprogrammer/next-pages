import React from 'react';
import Cards from "../Module/Cards";
import styles from "../../styles/CardBox.module.css"

function CardBox({data}) {

    return (
        <div className={styles.pages}>

            {data.map(items => <Cards {...items} key={items.id} />)}

        </div>
    );
}

export default CardBox;