import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Highlight from "./Highlight";
import RootLayout from "./RootLayout";
import TransLayout from "./TransLayout";

import Transactions from "./Transactions";
import Transdetails from "./Transdetails";
import ErrorPage from "./ErrorPage";
import ErrorPage2 from "./ErrorPage2";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Highlight />} />
            {/* <Route index element={<Table />} /> */}
            {/* <Route to="transactions" element={<TransLayout />}/> */}
            <Route path="blockdetails/:blk" element={<TransLayout />}/>
            <Route path="transactions" element={<Transactions />} />
            <Route path="transdetails/:tlk" element={<Transdetails />}/>
            <Route path="errorpage" element={<ErrorPage />}/>
            <Route path="errorpage2" element={<ErrorPage2 />} />
            
        </Route>
    )
)

function Home() {
    return (

        <RouterProvider router={router} />
    );
}
export default Home;