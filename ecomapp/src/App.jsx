import { Route, Routes } from 'react-router-dom'
import NavbarComp from './common/NavbarComp'
import ProductList from './products/ProductList'
import CartComp from './cart/CartComp'
import Details from './products/Details'
import Default from './common/Default'

function App() {
  return (
   <div className='container'>
    <NavbarComp />
    <Routes>
      <Route path='/products' element={<ProductList />}/>
      <Route path='/cart' element={<CartComp />}/>
      <Route path='/details/:id' element={<Details />}/>
      <Route path='/' element={<ProductList />}/>
      <Route path='*' element={<Default />}/>
    </Routes>
   </div>
  )
}

export default App
