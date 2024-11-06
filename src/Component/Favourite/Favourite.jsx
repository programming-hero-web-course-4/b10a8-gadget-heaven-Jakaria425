import { RiDeleteBin5Line } from "react-icons/ri";
import './Favourite.css'

const Favourite = ({ favorite, handelSAddCarts }) => {

    return (
        <div className='flex justify-between card-border rounded-xl p-3 mt-6 w-[60%] mx-auto' >
            <div className='flex'>
                <img className='w-16 h-16 rounded-xl' src={favorite.product_image} alt="" />
                <div>
                    <h1 className='text-xl font-bold'>{favorite.product_title}</h1>
                    <h1 className='font-bold mt-3'>{favorite.description}</h1>
                    <h1 className=' text-xl font-bold mt-2'>Price: ${favorite.price}</h1>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={() =>handelSAddCarts(favorite)}><RiDeleteBin5Line className='h-8 w-8' /></button>

            </div>
        </div>
    );
};

export default Favourite;