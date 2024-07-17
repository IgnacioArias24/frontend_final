import React, { useEffect, useState } from 'react'
import { getProducts } from '../../fetching/products.fetching'


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
)
  
  return (
    <div>
        <h1>Bienvenido!</h1>
        {
          loading ? 
          <h2>Cargando productos</h2>
          :
          <div>
              {products.map(product=>{
                return(
                  <div key={product._id}>
                    <h2>{product.titulo}</h2>
                    <p>{product.descripcion}</p>
                    <span>{product.precio}</span>
                    <Link to={'/detail/' + product._id}> Ver detalle </Link>
                  </div>
                )
              })}
          </div>
        }
        
    </div>
  )
}

export default HomeScreen