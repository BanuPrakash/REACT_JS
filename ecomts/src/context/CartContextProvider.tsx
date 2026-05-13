import { useReducer } from "react";
import { createContext } from "react";
import cartReducer, { type StateType } from "../reducers/cartReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { Product } from "../model/types";


type ContextType = StateType & {
    addToCart: (product:Product) => void,
    clearCart: () => void,
    increment: (id:number) => void
}

// central placeholder for data to be accessed by nth component
// without props-drill
export const CartContext = createContext<ContextType>({
    cartItems: [],
    quantity: 0,
    total: 0,
    addToCart: (product:Product) => {},
    clearCart: () => {},
    increment:( id: number) => {}
});

const initialState: StateType =  {
        cartItems: [],
        total:0,
        quantity: 0
};

    // ReactNode: can be string, number, null, element, array of elements 
type AppProps = {
    children: React.ReactNode
}
export default function CartContextProvider(props: AppProps) {
    let navigate = useNavigate();
    // state here means data managed by cartReducer
    // dispatch to send action to reducer function
    let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(product: Product) {
        dispatch({type:'ADD_TO_CART', payload: product})
    }
    function clearCart() {
        // on login
        // window.sessionStorage.setItem("user", "banu@gmail.com");
        let order = {
            "customer": window.sessionStorage.getItem("user"),
            "items": state.cartItems,
            "total": state.total,
            "orderDate": new Date()
        }

        axios.post("http://localhost:1234/orders", order).then(response => {
            console.log(response.data);
             dispatch({type: 'CLEAR_CART'});
            navigate("/");
        })
       
    }
    function increment(id: number) {
        dispatch({type:'INCREMENT', payload: id})
    }
    
    // state managed by cartReducer is copied onto Context
    // also functions are added to Context
    return <CartContext.Provider value={{...state, addToCart, clearCart, increment}}>
        {props.children}
    </CartContext.Provider>
}