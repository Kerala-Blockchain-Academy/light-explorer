import {Link,Outlet} from "react-router-dom";
import Table from "./Table";
import Logo from "./3d-modeling.png"
import styles from "./style/Home.module.css"
import { Image } from "react-bootstrap";
import Highlight from "./Highlight";


export default function RootLayout(){
    const myStyle={
        padding:'1020px'
    };
    return(
        <div className={styles.bgcolor}>
        <div className={styles.header}>
            {/* <section className={styles.topHeader}></section> */}
            
                <div className={styles.container}>
                    <div className={styles.logoWrapper}>
            <Image src={Logo} alt="Etherscan Logo" style={{ width: "50px", height: "auto" }} className={styles.logo} /></div>
            <h1 className={styles.header}>BlockExplorer</h1>
            
            <Link to="/" className={styles.menu}>Home</Link></div>
            
            <Outlet />
            {/* <Table /> */}
            {/* <Highlight /> */}
        </div>
        </div>
    )
}