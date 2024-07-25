import React from 'react';
import {useRouter} from "next/router";
import CardBox from "../../Component/templates/CardBox";


function Categorytext({products}) {
    const router = useRouter()
    const Namequery = router.query.categorytext

    if (router.isFallback) {
        return <h1>کمی صبر کنید</h1>
    }
    console.log(products)



    return (
        <div>
          <CardBox data={products}/>
        </div>
    );
}

export default Categorytext;


export async function getStaticPaths() {

    return {
        paths: [
            {params: {categorytext: "men's clothing"}},
            {params: {categorytext: "women's clothing"}},
            {params: {categorytext: "jewelery"}},
            {params: {categorytext: "electronics"}},
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const respons = await fetch(`https://fakestoreapi.com/products/category/${params.categorytext}`)
    const data = await respons.json();
    console.log(data)
    return {
        props: {
            products: data
        }
    }
}
