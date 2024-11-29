import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import styles from "../assets/styles/Home.module.css";

const MainLayout = () => {
  return (
    <>
      <div className={styles.app}>
        <Header />
        
        <main className={styles.content}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MainLayout