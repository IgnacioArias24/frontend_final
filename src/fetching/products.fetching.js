import { HTTP, URL } from "./http"





const PRODUCTS_ROUTE = '/api/products'



const getProducts = async () => {
    try{
        const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE)
        return response.productos
    }
    catch(error){
         if(error.status === 404){
            throw error
         }
         else{
            throw {status:500, message: 'Error interno en el servidor'}
         }
    }
}

const getProductDetailById = async (pid) => {
    const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE + '/' + pid)
    return response.producto
}





const addToCart = async (pid, cantidad) => {
    const response = await fetch(URL.URL_API + '/api/carts' + '/', {
        method: 'POST',
        body:{
            product_id : pid,
            cantidad: 1
        },
        headers:{
            'Content-Type' : 'aplication/json',
            'Authorization':  localStorage.getItem('token')
        }
    })
    .then(res => res.json())
    console.log(response)
}


export {getProducts, getProductDetailById, addToCart}