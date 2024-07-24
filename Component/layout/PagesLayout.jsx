import React from 'react';
import styles from "../../styles/PagesLayouts.module.css"
import Link from "next/link";

function PagesLayout({children}) {
    return (
        <>
            <header className={styles.header}>
               <Link href="/">
                   <h2>فروشگاه اتیکا</h2>
                   <p>Choose and Buy your shop</p>
               </Link>
            </header>
            {children}
            <footer className={styles.footer}>
                <span>MRAMIRMASOUD.IRNext.js courses | BotoCar Project ©</span>
            </footer>


        </>
    );
}

export default PagesLayout;