import { useEffect, useState } from "react";
import { carts, deleteFromCarts, SortedCarts, emptyCarts, discount} from "../../Utiliti/storage";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSortNumericDownAlt } from "react-icons/fa";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import modalimg from "../../assets/image/Group.png";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Carts = () => {
    const sumOfPrice = carts.reduce((accumulator, product) => accumulator + product.price, 0);
    console.log(sumOfPrice)
    const [cartItem, setCartsItem] = useState(carts)
    const handelCardAdd = (product, cartIndex) => {
        deleteFromCarts(product)
        setCartsItem(cartItem.filter(prodUct => prodUct !== product))

    }
    const handelPurses = () => {
        if (sumOfPrice==0){
            toast("No Product to Purses")
        }
        else{
            document.getElementById("my_modal_5").showModal()
        }
       
    }
    const navigate = useNavigate()
    const modalCloseBtnHandler = ()=>{
        emptyCarts()
        navigate('/');
      }

    const handleSort = () => {
        console.log("i", cartItem)
        console.log(Array.isArray(cartItem))
        console.log("l", cartItem.slice().sort((product1, product2) => product2.price - product1.price))
        SortedCarts(cartItem.slice().sort((product1, product2) => product2.price - product1.price))
        setCartsItem(carts)
    }
    return (
        <div className='pb-32'>
            <div className="mx-8 md:mx-16 lg:mx-20 flex justify-between items-center">
                <h1 className=" text-3xl font-bold my-10">Carts</h1>
                <div className="md:flex-row flex-col flex justify-center items-center gap-6">
                    <div>
                    <h1 className="font-bold ">Price: ${sumOfPrice}</h1>
                    <h1 className=" ">Discount: {discount}%</h1>
                    <div className="divider h-[2px]"></div>
                    <h1 className="font-bold">Total Price: ${Math.round(sumOfPrice*(1-discount/100))}</h1>
                    </div>
                    
                    <Link>
                        <button onClick={handleSort} className="flex h-10 gap-3 justify-center items-center px-3 rounded-xl bg-[#cb8bff] hover:bg-[#eed8ff]">
                            <h1>Sort by Price</h1><FaSortNumericDownAlt />
                        </button>
                    </Link>

                    <Link>
                        <button onClick={handelPurses} className="flex gap-2 items-center px-5 py-2 rounded-3xl bg-[#9538E2] text-black hover:bg-[#cb8bff]">
                            Purchase <MdOutlineShoppingCart />
                        </button>
                    </Link>

                </div>
            </div>
            {
                carts.map(cart => <Cart
                    key={carts.indexOf(cart)}
                    handelCardAdd={handelCardAdd}
                    cartIndex={carts.indexOf(cart)}
                    cart={cart} >
                </Cart>)
            }
            <div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <img className="mx-auto w-[90px]" src={modalimg} alt="modal-img" />
                        <h3 className="font-bold text-lg text-center">
                            Payment Successfull!
                        </h3>
                        <p className="py-4 text-center">Thanks for purchessing</p>
                        <p className="font-bold text-xl text-center">total: ${sumOfPrice}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button onClick={modalCloseBtnHandler} className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <ToastContainer/>
        </div>
        
    );
};

export default Carts;