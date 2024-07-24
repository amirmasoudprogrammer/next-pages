import React from 'react';
import {useRouter} from "next/router";
import CardDetails from "../../Component/Module/CardDetails";

function Categories(Categoriesid) {
    const router = useRouter()


    if (router.isFallback) {
        return <h1>کمی صبر کنید</h1>
    }



    return (
        <div>
            <CardDetails Categoriesid={Categoriesid}/>
        </div>
    );
}

export default Categories;

export async function getStaticPaths() {
    const respons = await fetch("https://fakestoreapi.com/products")
    const data = await respons.json();
    const paths = data.map(items => ({
        params: {categories: items.id.toString()}
    }))
    return {
        paths: paths,
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const respons = await fetch(`https://fakestoreapi.com/products/${params.categories}`)
    const data = await respons.json();

    return {
        props: {
            Categoriesid: data
        }
    }
}