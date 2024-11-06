import { Outlet, useLoaderData } from "react-router-dom";
import Product from '../Product/Product';
import { useEffect } from "react";

const Products = ({category}) => {
    const productsData = useLoaderData()
    let products 
    // useEffect(()=>{},[category])
    if(category==="all"){
        products = productsData
    }
    else{
        products = productsData.filter(product=>product.category === category)
    }
    
    
    
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 mx-auto gap-3">
            {
                products.map(product=><Product key={product.product_id} product={product} ></Product>)
            }
        </div>
    );
};

export default Products;