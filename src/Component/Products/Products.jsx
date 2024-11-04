import { Outlet, useLoaderData } from "react-router-dom";
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-3">
            {
                products.map(product=><Product key={product.product_id} product={product} ></Product>)
            }
        </div>
    );
};

export default Products;