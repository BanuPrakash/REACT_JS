import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import { Button } from 'react-bootstrap';
import CartRow from './CartRow';

export default function CartComp() {
  // get total and cartItems data from CartContext
  // get clearCart function from CartContext

  let {total, cartItems, clearCart} = useContext(CartContext);
  return (
    <div className='container'>
      {
        cartItems.map(item => <CartRow />)
      }
      <div className='row'>
          <div className='col-md-8'>
            &nbsp;
          </div>
          <div className='col-md-4'>
            Total {total}
          </div>
      </div>
      <div className='row'>
          <div className='col-md-8'>
            &nbsp;
          </div>
          <div className='col-md-4'>
            <Button onClick={clearCart}>Checkout</Button>
          </div>
      </div>
    </div>
  )
}
