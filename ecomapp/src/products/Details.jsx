import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

export default function Details() {
  // to read PathParameter
  //http://localhost:3000/details/3 ==> 3 is taken as id
  // <Route path='/details/:id'>
  let {id} = useParams();

  let [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(response => setProduct(response.data))
  }, [id]);

  return (
    <div>
      {
        product && <div>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} />
            {JSON.stringify(product.reviews)}
          </div>
      }
     </div>
  )
}
