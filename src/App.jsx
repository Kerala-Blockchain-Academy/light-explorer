import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HeroSection from "./components/HeroSection"
import "./assets/styles/Home.module.css";
import MainLayout from "./Layout/MainLayout";
import BlockDetails from "./components/BlockDetails";
import TransDetails from "./components/TransactionDetails";
import ErrorPage from "./components/ErrorPage"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HeroSection />} />
          <Route path="/blockdetails/:blk" element={<BlockDetails />} />
          <Route path="/transdetails/:thash" element={<TransDetails />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </>
    )
  );
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
