import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addCarts, carts, addFavorites, favorites } from "../../Utiliti/storage";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductDetails = () => {
    const { product_id } = useParams()
    const id = parseInt(product_id)
    const products = useLoaderData()
    const product = products.find(product => product.product_id === id)
    let f= 100
    let c= 1
    const handelAdToCart = () => {
        addCarts(product)
        toast("Product Add in Cart successfully")
        c=c+1
    }

    const handelAdToFavorites = () => {
        addFavorites(product)
        toast("Product Add in Wish List successfully")
        f=f+1
    }
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="h-[1000px] box-border pt-24">
            <div className="bg-[#9538E2] rounded-2xl h-[500px]">
                <div className="absolute left-[7%] p-6 w-[86%]  md:left-[20%] md:w-[60%] top-52 lg:top-64 border-[3px] border-[#ffff] rounded-3xl bg-[#0e000069] ">
                    <div className="flex flex-col md:flex-row gap-4 p-5 rounded-2xl bg-[#fcfcfc]">
                        <div className="w-[40%] flex items-center justify-center">
                            <img className="rounded-2xl h-full" src={product.product_image} alt="" />
                        </div>
                        <div>
                            <h1 className="text-3xl">{product.product_title}</h1>
                            <h3 className="mt-1 font-bold">Price: ${product.price}</h3>
                            <h5 className="mt-1 pl-4 rounded-2xl w-24 border-[1px] border-black">{product.availability ? "In stock" : 'Stock Out'}</h5>
                            <p className="mt-1">{product.description}</p>
                            <h2 className="mt-1 font-bold">Specification :</h2>
                            <div className="pl-4">
                                {
                                    product.Specification.map(specification => <p key={product.Specification.indexOf(specification)}>{specification}</p>)
                                }
                            </div>
                            <div className="flex gap-2 items-center">
                                <IoStar /><IoStar /><IoStar /><IoStarHalf /><IoStarOutline /><p className="text-[18px] ml-2">{product.rating}</p>
                            </div>
                            <div className="flex justify-center items-center gap-5">
                                <Link >
                                    <button key={c} onClick={handelAdToCart} className="flex gap-2 items-center px-5 py-2 rounded-3xl bg-[#9538E2] text-black hover:bg-[#cb8bff]">
                                        Add To Card <MdOutlineShoppingCart />
                                    </button>
                                </Link>
                                
                                <Link >
                                    <button disabled={favorites.some(favorite => favorite.product_id == id) ? true : false}
                                    key={f}
                                        onClick={handelAdToFavorites}
                                        className={`flex ${favorites.some(favorite => favorite.product_id == id) ? "disabled:bg-gray-400 disabled:cursor-not-allowed" : "hover:bg-[#cb8bff]"} text-xl h-10 gap-2 items-center border-[2px] border-black px-4 py- rounded-3xl bg-[#fafafa] text-black `}>
                                        <MdFavorite />
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div >
    );
};

export default ProductDetails;