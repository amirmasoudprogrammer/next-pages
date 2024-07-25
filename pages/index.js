import React, {useEffect} from "react";
import SearchBox from "../Component/Module/SearchBox";
import CategoryList from "../Component/templates/CategoryList";
import CardBox from "../Component/templates/CardBox";
import styles from "../styles/categories.module.css";
import AllButton from "../Component/Module/AllButton";


export default function Home({products}) {
    const productitems = products.slice(0,3)

    return (
        <div className={styles.mainitems}>
            <SearchBox/>
            <CategoryList/>
            <AllButton/>
            <CardBox data={productitems}/>
        </div>
    )
}


export async function getStaticProps() {
    const respons = await fetch("https://fakestoreapi.com/products")
    const data = await respons.json();
    console.log(data)
    return {
        props: {
            products: data
        }
    }
}