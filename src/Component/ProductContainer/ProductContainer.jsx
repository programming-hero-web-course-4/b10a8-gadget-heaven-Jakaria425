import Products from "../Products/Products";
import ProductCategory from "../ProductCategory/ProductCategory";
import Banner from "../Banner/Banner";


const ProductContainer = () => {
    return (
        <div>
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-[40px] font-bold">Explore Cutting-Edge Gadgets</h1>
            </div>
            
            <Banner></Banner>
            <div className="lg:flex mx-auto">
                <ProductCategory></ProductCategory>
                <Products></Products>
            </div>
        </div>

    );
};

export default ProductContainer;