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
import ProductContainer from './Component/ProductContainer/ProductContainer.jsx';
// import Product from './Component/Product/Product.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    loader: ()=>fetch('https://jakaria425.github.io/product/product.json'),
    // loader: ()=> fetch('https://jakaria425.github.io/product/product.json'),
    element: <Home></Home>,
    children:[
      {
        path: "/",
        loader: ()=>fetch('https://jakaria425.github.io/product/product.json'),
        element: <ProductContainer></ProductContainer>
      },
      {
        path: "/products",
        loader: ()=>fetch('https://jakaria425.github.io/product/product.json'),
        element: <ProductContainer></ProductContainer>
      },
      // {
      //   path: "/products/:product_id",
      //   loader: ({ params }) => params,
      //   element: <Product></Product>
      // },
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