import { useState, useEffect } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdFavorite } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useLocation } from "react-router-dom";
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
    const [isHome, setIsHome] = useState()
    let location = useLocation();
    useEffect(() => { location.pathname == '/' ? setIsHome(true) : setIsHome(false) }, [location])
    console.log(location.pathname)
    return (
        <nav className={`absolute ${isHome ? 'text-white' : 'text-black'} font-bold z-[10]  w-11/12`}>
            <div className=" mt-6 box-border px-5 ">
                <div className="flex justify-between">
                    <div onClick={() => setNavOpen(!navOpen)} className="pl-8 py-5 text-2xl md:hidden z-[7]">
                        {
                            navOpen ? <button ><CgMenuLeftAlt /></button>
                                : <button><RxCross2 /></button>
                        }
                    </div>
                    <div>
                        <h1 className=" p-5">Gadget Heaven</h1>
                    </div>

                    <div className='pl-6  '>
                        <nav className={`md:flex z-[8]  md:static md:gap-7 md:rounded-none duration-500 absolute left-10 rounded-2xl p-5 ${navOpen ? "-top-44 " : "top-[70px] bg-[#b8b5b580] "}`}>
                            {
                                routers.map(router =><div><NavLink key={router.id} to={router.path}> {router.service}</NavLink></div> )
                            }
                        </nav>
                    </div>
                    <div className="py-5 text-black flex gap-4">
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
                </div>

            </div>


        </nav>


    );
};

export default Nav;