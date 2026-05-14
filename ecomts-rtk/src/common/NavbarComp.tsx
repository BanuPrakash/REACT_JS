import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useAppSelector } from '../redux/store';

export default function NavbarComp() {
  // type safe useSelector
  let {quantity} = useAppSelector(state => state.cart);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Acme</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart <Badge>{quantity}</Badge></Nav.Link>
            <Nav.Link as={Link} to="/users">User</Nav.Link>
             <Nav.Link as={Link} to="/comments">Infinite Scroll</Nav.Link>
            <Nav.Link>Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
