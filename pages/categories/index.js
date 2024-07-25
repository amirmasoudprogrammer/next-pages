import React from 'react';
import CardBox from "../../Component/templates/CardBox";
import CategoryList from "../../Component/templates/CategoryList";
import styles from "../../styles/categories.module.css"
import SearchBox from "../../Component/Module/SearchBox";

function categories({products}) {

    return (
        <>
            <div className={styles.mainitems}>
                <SearchBox/>
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



