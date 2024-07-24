import React from 'react';
import styles from "../../styles/CategoryList.module.css"
import Link from "next/link";
import { GiTravelDress } from "react-icons/gi";
import { IoMdShirt } from "react-icons/io";
import { GiBigDiamondRing } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";

function CategoryList() {
    return (
       <div className={styles.items}>
           <div className={styles.container}>
               <Link href={`/category/men's clothing`}>
                   <span>men's clothing</span>
                   <IoMdShirt />
               </Link>
           </div>
           <div className={styles.container}>
               <Link href={`/category/women's clothing`}>
                   <span>women's clothing</span>
                   <GiTravelDress />
               </Link>
           </div>
           <div className={styles.container}>
               <Link href={`/category/jewelery`}>
                   <span>jewelery</span>
                   <GiBigDiamondRing />
               </Link>
           </div>
           <div className={styles.container}>
               <Link href={`/category/electronics`}>
                   <span>electronics</span>
                   <GrPersonalComputer />
               </Link>
           </div>

       </div>
    );
}

export default CategoryList;