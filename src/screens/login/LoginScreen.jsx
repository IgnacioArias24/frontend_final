import React, { useState } from 'react'
import { login } from '../../fetching/auth.fetching'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"

const LoginScreen = () => {
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (event) =>{
        try{
            event.preventDefault()
            const usuario = {
                email: event.target.email.value,
                password: event.target.password.value
            }
            console.log(usuario)
            await login(usuario)
            setErrorText('')
            navigate('/home')
        }
        catch(error){
           
            setErrorText(error.message)
        }
    }
  return (
    <div className='contenedorlogin'>
        <div className='loginh1' >
            <h1 >Iniciar sesión</h1> 
        </div> 
        <form className='formlogin' onSubmit={handleSubmit}>
            <div className='div1login'>
                <label htmlFor="email">Ingrese su email:</label>
                <input placeholder='joeDoe@gmail.com' id='email' name='email'/>
            </div>
            <div className='div2login'>
                <label htmlFor="password">Ingrese su contraseña:</label>
                <input type="text" placeholder='******' id='password' name='password' />
            </div>
            {
                errorText 
                &&
                <span style={{color: 'red'}}>{errorText}</span>
            }
            <span>Si aun no estas registrado, <Link to={'/register'}>registrate</Link></span>
            <button className='buttonlogin' type='submit'>Iniciar sesion</button>
        </form>
    </div>
  )
}

export default LoginScreen