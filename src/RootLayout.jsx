import { Link, Outlet } from "react-router-dom";
import Logo from "./3d-modeling.png"
import styles from "./style/Home.module.css"



export default function RootLayout() {

  return (
    <section className={styles.header}>
      
        <section className={styles.topHeader}>
        <Link to="/">
          <img src={Logo} alt="lite explorer Logo" className={styles.logo} />
          <h1>Lite Explorer</h1>
          </Link>
        </section>
      
      <section>
        <Outlet />
      </section>
      <Link to="/" >
        <section className={styles.menu}>
          <p>Home</p>
        </section>
      </Link>
    </section>

  );
}