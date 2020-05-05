const CHANGE_ARRAY_CART = 'CHANGE_ARRAY_CART';
const CHANGE_INDEX = 'CHANGE_INDEX';

let internalDate = {
    Product: [
    ],
    index: 1
}

const CartReducer = (state = internalDate,action) =>{
    switch (action.type) {
        case CHANGE_ARRAY_CART:{
            return{
                ...state,
                Product: action.newProducts
            }
        }
        case CHANGE_INDEX:{
            return{
                ...state,
                index: action.index
            }
        }
    }
    return state;
}
export const changeArrayProducts = (newProducts) => ({type:CHANGE_ARRAY_CART,newProducts: newProducts})
export const changeIndex = (index) =>({type:CHANGE_INDEX,index:index})
export default CartReducer;