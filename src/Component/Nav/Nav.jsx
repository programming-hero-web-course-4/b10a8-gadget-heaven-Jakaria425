import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import './Nav.css'


const Nav = () => {
    const routers = [
        { path: "/", service: "Home", id: 1 },
        { path: "/statistics", service: "Statistics", id: 2 },
        { path: "/dashboard", service: "Dashboard", id: 3 },
        { path: "/offer", service: "Offer", id: 4 },

    ];
    const [navOpen, setNavOpen] = useState(true)
    const favorite_count = 4
    const cart_count = 2

    return (
        <nav className="flex box-border px-5 justify-between font-bold">

            <div onClick={() => setNavOpen(!navOpen)} className="pl-8 py-5 text-2xl md:hidden z-40">
                {
                    navOpen ? <button ><CgMenuLeftAlt /></button>
                        : <button><RxCross2 /></button>
                }
            </div>
            <div>
                <h1 className=" p-5">Gadget Heaven</h1>
            </div>

            <div>
                <ul className={`md:flex pl-8 md:static md:gap-7 md:rounded-none duration-500 absolute left-10 rounded-2xl p-5 ${navOpen ? "-top-44 " : "top-11 bg-slate-900 "}`}>
                    {
                        routers.map(router => <Link to={router.path} key={router.id}> <li key={router.id}>{router.service}</li></Link>)
                    }
                </ul>
            </div>
            <div className="py-5 flex gap-4">
                <button className="relative">
                    <div className="favorite" favorite-count={favorite_count}>
                        <MdFavorite className="h-8 w-9 p-1 rounded-full bg-[#ffff]" />
                    </div>
                </button>
                <button className="relative">
                    <div className="cart" cart-count={cart_count}>
                    <MdOutlineShoppingCart className="h-8 w-9 p-1 rounded-full bg-[#ffff]" />
                    </div>
                </button>
                
            </div>
        </nav>


    );
};

export default Nav;