import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom";

const Product = (product) => {
   console.log(product.product.product_id)
    return (
        <div>
            <div className="card bg-base-100 max-w-96 h-[450px] shadow-xl mx-auto">
                <div className="box-border w-[100%] h-[220px] p-4">
                    <img
                        className="w-full h-[220px]"
                        src={product.product.product_image}
                        alt="" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{product.product.product_title}</h2>
                    <p>{product.product.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;