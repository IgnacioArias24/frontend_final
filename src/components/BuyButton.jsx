import React, { useState } from "react"
import { Link } from 'react-router-dom'

const BuyButton = ({stock}) => {
    const [counter, setCounter] = useState(0)
    const incrementar = ()=>{
        if(counter!=stock){
            setCounter(counter+1)
        }
        
    }
    const decrementar = ()=>{
        if(counter!=0){
            setCounter(counter-1)
        }
    }

  return (
    <>
        {
            counter === 0
            ?
            <button onClick={incrementar}>Agregar al carrito</button>
            :
            <div>
                <button onClick={decrementar}>-</button>
                <span> {counter}</span>
                <button onClick={incrementar}>+</button>
                <Link to={"/Carrito"}>
                <button>Añadir al carrito</button>
                </Link>
            </div>

        }
        
    </>
  
  )
}

export default BuyButton