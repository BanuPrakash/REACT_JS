
import { Button } from 'react-bootstrap';
import CartRow from './CartRow';
import {useDispatch, useSelector} from 'react-redux';
import { clearCart } from '../redux/features/cartSlice';

export default function CartComp() {
  let dispatch = useDispatch();
  let {cartItems, total} = useSelector(state => state.cart);
  return (
    <div className='container'>
       {
        cartItems.map(item => <CartRow product={item} key={item.id} />)
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
            <Button onClick={() => dispatch(clearCart())} >Checkout</Button>
          </div>
      </div>
    </div>
  )
}
