import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import styles from "../src/assets/styles/Home.module.css"

function App() {

  return (

    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>

  );
};

export default App;
