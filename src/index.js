import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App';
import ErrorPage from './components/ErrorPage';
import BlockDetails from './components/BlockDetails';
import TransDetails from './components/TransactionDetails';
import HeroSection from './components/HeroSection';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HeroSection /> },

      {
        path: "/blockdetails/:blk",
        element: <BlockDetails />
      },

      {
        path: "/transdetails/:thash",
        element: <TransDetails />
      },

    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

