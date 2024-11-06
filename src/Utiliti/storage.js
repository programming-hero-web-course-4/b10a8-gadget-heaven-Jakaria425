
let carts = []
const addCarts = (product) => {
    carts.push(product)
}
const deleteFromCarts = (product) =>{
    const newCarts = carts.filter(cart => !(cart.product_id === product.product_id ))
    carts = newCarts
}


let favorites = []
const addFavorites = (product) => {
    favorites.push(product)
}
const deleteFromFavorites = (product) =>{
    const newFavorites = favorites.filter(favorite => !(favorite.product_id === product.product_id ))
    favorites = newFavorites
}

export { carts }
export {  favorites }
export { addCarts, addFavorites }
export { deleteFromCarts, deleteFromFavorites }



