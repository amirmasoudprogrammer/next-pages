import React from 'react';
import CardBox from "../../Component/templates/CardBox";
import CategoryList from "../../Component/templates/CategoryList";
import styles from "../../styles/categories.module.css"

function categories({products}) {

    return (
        <>
            <div className={styles.mainitems}>
            <CategoryList/>
            <CardBox data={products}/>
            </div>
        </>
    );
}

export default categories;

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



