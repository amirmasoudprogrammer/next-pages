import React from 'react';
import {useRouter} from "next/router";
import CardBox from "../../Component/templates/CardBox";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";

function ItemSlug({products}) {
    const router = useRouter()
    const [min, max] = router.query.Slug || []
    const filters = products.filter(items => items.price > min && items.price < max)
    console.log(filters)
    if (!filters.length) return <h1>NOTFOUND</h1>
    return (
        <div>
            <CardBox data={filters}/>
        </div>
    )
        ;
}

export default ItemSlug;


export async function getServerSideProps() {
    const respons = await fetch(`https://fakestoreapi.com/products`)
    const data = await respons.json();
    console.log(data)
    return {
        props: {
            products: data
        }
    }
}
