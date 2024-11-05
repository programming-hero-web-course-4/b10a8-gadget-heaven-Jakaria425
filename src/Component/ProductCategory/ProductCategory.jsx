import { Outlet, useLoaderData } from "react-router-dom";
import { Link, NavLink, useLocation } from "react-router-dom";


const ProductCategory = ({setCategory}) => {
    const products = useLoaderData()
    const catagories = [...new Set(products.map(product => product.category))]
    console.log("catagories", catagories)
    return (
        <div className="w-40 flex flex-col items-center gap-6 mx-auto">
            <button onClick={()=>{setCategory("all")}} className="w-36 mt-4 px-5 py-2 rounded-3xl bg-[#e2e2e2] text-black hover:bg-[#cb8bff]"> All Category</button>
            {
                catagories.map(category => <button onClick={()=>{setCategory(category)}} className="w-36 mt-4 px-5 py-2 rounded-3xl bg-[#e2e2e2] text-black hover:bg-[#cb8bff]"> {category}</button>)
            }
        </div>
    );
};

export default ProductCategory;