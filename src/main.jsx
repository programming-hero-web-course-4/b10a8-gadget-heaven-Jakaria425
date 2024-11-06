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
import ProductDetails from './Component/ProductDetails/ProductDetails.jsx';
import Favorites from './Component/Favorites/Favorites.jsx';
import Carts from './Component/Carts/Carts.jsx';
import NotFoundPage from './Component/NotFoundPage/NotFoundPage.jsx'




const router = createBrowserRouter([
    {
        path: "/",
        loader: () => fetch('https://jakaria425.github.io/product/product.json'),
        element: <Home></Home>,
        errorElement:<NotFoundPage></NotFoundPage>,
        children: [
            {
                path: "/",
                loader: () => fetch('https://jakaria425.github.io/product/product.json'),
                element: <ProductContainer></ProductContainer>
            },
            {
                path: "/products",
                loader: () => fetch('https://jakaria425.github.io/product/product.json'),
                element: <ProductContainer></ProductContainer>
            },
            {
                path: "/products/:product_id",
                loader: () => fetch('https://jakaria425.github.io/product/product.json'),
                element: <ProductDetails></ProductDetails>,
            },
            {
                path: "/statistics",
                loader: () => fetch('https://jakaria425.github.io/product/product.json'),
                element: <Statistics></Statistics>,
            },
           
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    
                    {
                        path: "/dashboard/carts",
                        element: <Carts></Carts>,
                    },
                    {
                        path: "/dashboard/favorites",
                        element: <Favorites></Favorites>,
                    },
                
                ]
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