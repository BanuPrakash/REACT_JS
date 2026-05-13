
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import type { Product } from '../model/types';
import { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';

type AppProps = {
  product: Product
}

export default function ProductCard({product}: AppProps) {
  let {addToCart} = useContext(CartContext);
  let {id, title, description, price, images} = product;
  return (
    <div className='col-md-4 my-2'>
      <Card style={{ width: '18rem' }}>
      <Link to={`/details/${id}`}>
        <Card.Img variant="top" src={images[0]}/>
      </Link>
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        ${price} &nbsp;
        <Button variant="primary" onClick={() => addToCart({id, title, description, price, images})}>
            Add to Cart
        </Button>
      </Card.Footer>
    </Card>
    </div>
  )
}
