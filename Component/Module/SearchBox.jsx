import React, {useState} from 'react';
import {useRouter} from "next/router";
import styles from "../Module/SearchBox.module.css"

function SearchBox(props) {
    const router = useRouter()
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")


    const searchHandler = () => {

        if (min && max) {
            router.push(`/filter/${min}/${max}`)
        } else {
            alert("مقدار یا خالی است یا مبلغی وجود ندارد ")
        }




    }
    return (
        <div className={styles.container}>
            <div>
                <input
                    placeholder="Inter min-price"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                />
                <input
                    placeholder="Inter max-price"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                />
            </div>
            <button onClick={searchHandler}>Search</button>
        </div>
    );
}

export default SearchBox;