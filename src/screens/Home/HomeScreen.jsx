import React, { useEffect, useState } from 'react'
import { getProducts } from '../../fetching/products.fetching'
import { Link } from 'react-router-dom'
import BuyButton from '../../components/BuyButton'

import "./HomeScreen.css"


const HomeScreen = () => {
  const [products, setProducts ] =useState ([])
  const [loading, setLoading] = useState(true)
  useEffect(
    () => {
      getProducts()
      .then((productos)=>{
        setLoading(false)
        setProducts(productos)
      })
      .catch((error)=>{
        console.error("algo ocurrio mal")
      })
    },
    []
  );
  return (
    <div>
        <header>
        <h2 className='tit'>Encuentra todo lo necesario para tu cocina</h2>
        <h1 className='titulo'>Bienvenido!</h1>
        </header>
        {
          loading ? 
          <h2>Cargando productos</h2>
          :
          <div className='contenedorhome'>
              {products.map(product=>{
                return(
                  <div className='divproduct' key={product._id}>
                    <h2 className='h2product'>{product.titulo}</h2>
                    <p className='pproduct'>{product.descripcion}</p>
                    <span className='spanproduct'>{product.precio} $</span> <br /><br />
                    <BuyButton stock={product.stock} />
                  </div>
                )
              })}
          </div>
        }
        
    </div>
  )
}


      
export default HomeScreen
