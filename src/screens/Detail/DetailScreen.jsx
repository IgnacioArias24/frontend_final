import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetailById  } from '../../fetching/products.fetching'


const DetailScreen = () => {
    const {pid} = useParams
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)


    useEffect(()=>{
        getProductDetailById(pid)
        .then(producto => {
            setLoading(false)
            setProduct(producto)
        })
    }, [])
    const agregarAlCarrito = () =>{
        addToCart(product.pid)
    }
    return (
        <div>
            <h1> Detalle del producto </h1>
            {
                loading ?
                <h2>Cargando</h2>:
                <div>
                    <h2>{producto.titulo}</h2>
                    <p>{producto.descripcion}</p>
                    <button onClick={{agregarAlCarrito}}>Añadir al carrito</button>
                </div>
            }
        </div>
    )
}
 

export default DetailScreen