import { useEffect, useState } from "react";
import { favorites, deleteFromFavorites } from "../../Utiliti/storage";
import Favourite from "../Favourite/Favourite";


const Favorites = () => {
    
    const [favoritesItem, setFavoritesItem] = useState(favorites)
    const handelSAddCarts = (product) => {
        deleteFromFavorites(product)
        setFavoritesItem(favoritesItem.filter(prodUct=>prodUct!==product))
    }
    // useEffect(()=>{
    //     setFavoritesItem
    // },[])
    
    return (
        <div className='pb-32'>
            <h1 className="ml-20 text-3xl font-bold my-10">Wish List</h1>
            { 
                favoritesItem.map(favorite => <Favourite 
                    key={favorite.product_id}
                    handelSAddCarts={handelSAddCarts}
                    favorite={favorite} >
                    </Favourite>)
            }           
        </div>
        
    );
};

export default Favorites;

