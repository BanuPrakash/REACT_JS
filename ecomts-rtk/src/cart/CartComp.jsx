
import { Button } from 'react-bootstrap';
import CartRow from './CartRow';

export default function CartComp() {
  return (
    <div className='container'>
      {/* {
        cartItems.map(item => <CartRow product={item} key={item.id} />)
      } */}
      <div className='row'>
          <div className='col-md-8'>
            &nbsp;
          </div>
          <div className='col-md-4'>
            Total {0}
          </div>
      </div>
      <div className='row'>
          <div className='col-md-8'>
            &nbsp;
          </div>
          <div className='col-md-4'>
            <Button >Checkout</Button>
          </div>
      </div>
    </div>
  )
}
