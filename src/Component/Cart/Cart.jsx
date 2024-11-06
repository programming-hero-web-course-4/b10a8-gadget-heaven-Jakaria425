import { RiDeleteBin5Line } from "react-icons/ri";
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = ({ cart, handelCardAdd, cartIndex }) => {
    console.log(cartIndex)

    return (
        <div className='flex justify-between card-border rounded-xl p-3 mt-6 w-[60%] mx-auto' >
            <div className='flex'>
                <img className='w-16 h-16 rounded-xl' src={cart.product_image} alt="" />
                <div>
                    <h1 className='text-xl font-bold'>{cart.product_title}</h1>
                    <h1 className='font-bold mt-3'>{cart.description}</h1>
                    <h1 className=' text-xl font-bold mt-2'>Price: ${cart.price}</h1>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link>
                <button onClick={() =>handelCardAdd( cartIndex)}><RiDeleteBin5Line className='h-8 w-8' /></button>
                </Link>
                

            </div>
        </div>
    );
};


export default Cart;