import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import CartContextProvider from './context/CartContextProvider.js'


createRoot(document.getElementById('root') as HTMLDivElement).render(
     <BrowserRouter>
        <CartContextProvider>
            <App />
        </CartContextProvider>  
    </BrowserRouter>
)
