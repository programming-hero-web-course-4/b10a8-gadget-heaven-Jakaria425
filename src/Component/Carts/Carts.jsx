import { useEffect, useState } from "react";
import { carts, deleteFromCarts } from "../../Utiliti/storage";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSortNumericDownAlt } from "react-icons/fa";
import Cart from "../Cart/Cart";


const Carts = () => {
    const sumOfPrice = carts.reduce((accumulator, product) => accumulator + product.price, 0);
    console.log(sumOfPrice)
    const [cartItem, setCartsItem] = useState(carts)
    const handelCardAdd = (product, cartIndex) => {
        deleteFromCarts(product)
        setCartsItem(cartItem.filter(prodUct => prodUct !== product))
        
    }
  
    
    const handleSort = () =>{
        const sortedPrice = carts.slice().sort((product1, product2) => product2.price - product1.price);
        setCartsItem(sortedPrice)
    }
    const cartIndex = cartItem.indexOf()
    return (
        <div className='pb-32'>
            <div className="mx-20 flex justify-between items-center">
                <h1 className=" text-3xl font-bold my-10">Carts</h1>
                <div className="flex justify-center items-center gap-6">
                    <h1 className="font-bold text-xl">Price: ${sumOfPrice}</h1>
                    <button onClick={handleSort} className="flex h-10 gap-3 justify-center items-center px-3 rounded-xl bg-[#cb8bff] hover:bg-[#eed8ff]">
                        <h1>Sort by Price</h1><FaSortNumericDownAlt />
                    </button>
                    <button className="flex gap-2 items-center px-5 py-2 rounded-3xl bg-[#9538E2] text-black hover:bg-[#cb8bff]">
                        Purchase <MdOutlineShoppingCart />
                    </button>
                </div>
            </div>
            {
                cartItem.map(cart => <Cart
                    key={cart.product_id}
                    handelCardAdd={handelCardAdd}
                    cartIndex={cartItem.indexOf(cart)}
                    cart={cart} >
                </Cart>)
            }
        </div>

    );
};

export default Carts;