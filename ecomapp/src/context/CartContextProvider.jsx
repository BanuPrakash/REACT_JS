import { useReducer } from "react";
import { createContext } from "react";
import cartReducer from "../reducers/cartReducer";

// central placeholder for data to be accessed by nth component
// without props-drill
export const CartContext = createContext();

const initialState =  {
        cartItems: [],
        total:0,
        quantity: 0
    };

export default function CartContextProvider(props) {
    // state here means data managed by cartReducer
    // dispatch to send action to reducer function
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
    // state managed by cartReducer is copied onto Context
    // also functions are added to Context
    return <CartContext.Provider value={{...state, addToCart, clearCart, increment}}>
        {props.children}
    </CartContext.Provider>
}