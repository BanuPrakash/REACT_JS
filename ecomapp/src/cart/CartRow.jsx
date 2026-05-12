import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContextProvider";

export default function CartRow({product}) {
  let {id, title, price, images, qty, amount} = product;
  let {increment} = useContext(CartContext)
  return (
    <div className='row my-2'>
      <div className='col-md-2'>
        <img src={images[0]} style={{"width": '50px'}} alt={title} />
      </div>
      <div className='col-md-2'>
        <h5>{title}</h5>
      </div>
      <div className='col-md-2'>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className='col-md-4'>
        <Button> - </Button>
        &nbsp; {qty} &nbsp;
        <Button onClick={increment}> + </Button>
      </div>
      <div className='col-md-2'>
        <p>${amount.toFixed(2)}</p>
      </div>
    </div>
  )
}
