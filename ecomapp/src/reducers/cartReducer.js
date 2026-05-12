/* state looks like
    {
        cartItems: [],
        total:0,
        quantity: 0
    }
*/
export default function cartReducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            // payload will be product
            const item = {...action.payload, qty: 1, amount: action.payload.price}
            return {
                cartItems: [...state.cartItems, item],
                total: state.total + item.amount,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            return state;
        case 'DECREMENT':
            return state;
        case 'CLEAR_CART':
            return  {
                        cartItems: [],
                        total:0,
                        quantity: 0
                    }
        default:
            return state;
    }
}