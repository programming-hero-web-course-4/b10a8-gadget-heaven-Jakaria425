import Products from "../Products/Products";
import ProductCategory from "../ProductCategory/ProductCategory";
import Banner from "../Banner/Banner";
import { useState } from "react";

const ProductContainer = () => {
    const [category, setCategory] = useState("all")
    return (
        <div className="relative z-[4]">
            <Banner></Banner>
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-[40px] font-bold">Explore Cutting-Edge Gadgets</h1>
            </div>
            
            <div className="lg:flex mx-auto ">
                <ProductCategory setCategory={setCategory}></ProductCategory>
                <Products category={category}></Products>
            </div>
        </div>
    );
};

export default ProductContainer;