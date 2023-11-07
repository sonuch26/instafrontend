import React from 'react'
import "../styles/register.css"
const Register = () => {
    return(
        <div className='registerContainer'>
            <h3>Register</h3>
        <div>
            <input type='email' name="email" placeholder='Enter email'/>
        </div>
        <div>
            <input type="password" name="password" placeholder='Enter password'/>
        </div>
        <button>Register</button>
        <button className='link'>Already registered ! Login</button>
        </div>
    )
}
export default Register