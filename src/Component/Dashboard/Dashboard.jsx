import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
    const id="curt"
    const navigate = useNavigate()
    const [active, setActive] = useState()
    
    const handelCart = () => {
        setActive('Cart')
        navigate("/dashboard/carts")
    }
    const handelWishlist = () => {
        setActive('Wishlist')
        navigate("/dashboard/favorites")
        
    }
    return (
        <div className="pt-24 ">
            <div className=" bg-[#9538E2] rounded-2xl h-[300px] text-white">
                <div className="max-w-[700px] mx-auto text-center flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mt-8">Dashboard</h1>
                    <h2 className="mt-7">Explore the latest gadgets that will take your experience to the next level.
                        From smart devices to the coolest accessories, we have it all!</h2>
                    
                        <div className='border w-[163px] rounded-lg text-black'>
                            <button id={id} onClick={handelCart} className={`w-[80px] rounded-l-lg  p-3 ${active === 'Cart' ? 'bg-[#c08aec]' : 'bg-[#9538E2]'}`}>Cart</button>
                            <button onClick={handelWishlist} className={`w-[80px] rounded-r-lg p-3 ${active === 'Wishlist' ? 'bg-[#c08aec]' : 'bg-[#9538E2]'}`}>Wishlist</button>
                        </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;