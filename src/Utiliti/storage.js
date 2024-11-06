
let carts = []
const addCarts = (product) => {
    carts.push(product)
}
const deleteFromCarts = (id) =>{
    carts.splice(id, 1);
}
const SortedCarts = (products) =>{
    carts = products
}
const emptyCarts = () =>{
    carts = []
}



let favorites = []
const addFavorites = (product) => {
    
    favorites.push(product)
    
}
const deleteFromFavorites = (product) =>{
    const newFavorites = favorites.filter(favorite => !(favorite.product_id === product.product_id ))
    favorites = newFavorites
}

let discount = 0
const getDiscount = (voucher) =>{
    discount = voucher
}




export { carts }
export {  favorites }
export { addCarts, addFavorites }
export { deleteFromCarts, deleteFromFavorites }
export { SortedCarts, emptyCarts }
export { discount, getDiscount }

