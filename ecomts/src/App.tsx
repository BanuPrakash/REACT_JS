import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarComp from './common/NavbarComp'
import ProductList from './products/ProductList'
import Default from './common/Default'
import { Suspense } from 'react'
import CartComp from './cart/CartComp';

const Details = lazy (() => import('./products/Details'))

function App() {
  return (
   <div className='container'>
    <NavbarComp />
    <Routes>
      <Route path='/products' element={<ProductList />}/>
       <Route path='/cart' element={
        <Suspense fallback={<div>Loading Cart....</div>}>
          <CartComp />
        </Suspense>
        }/>
      <Route path='/details/:id' element={
        <Suspense fallback={<div>Loading Details....</div>}>
          <Details />
        </Suspense>
        }/>
      <Route path='/' element={<ProductList />}/>
      <Route path='*' element={<Default />}/>
    </Routes>
   </div>
  )
}

export default App
