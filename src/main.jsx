import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Component/Home/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Component/Statistics/Statistics.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import Offer from './Component/Offer/Offer.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)