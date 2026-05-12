import { useReducer } from "react";
import { createContext } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext();

const initialState =  {
        cartItems: [],
        total:0,
        quantity: 0
    };

export default function CartContextProvider(props) {
    let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(product) {
        dispatch({type:'ADD_TO_CART', payload: product})
    }
    function clearCart() {
        dispatch({type: 'CLEAR_CART'})
    }
    function increment(id) {
        dispatch({type:'INREMENT', payload: id})
    }
    return <CartContext.Provider value={{...state, addToCart, clearCart, increment}}>
        {props.children}
    </CartContext.Provider>
}