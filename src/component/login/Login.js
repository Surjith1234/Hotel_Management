import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div className='login'>
        <div className='logincontainer'>
        <h1>Login</h1>
            <form >
                <div className='inputfields'>
                    <input type='text'></input>
                    <span></span>
                    <label>User Name</label>
                </div>
                <div className='inputfields'>
                    <input type='password'></input>
                    <span></span>
                    <label>Password</label>
                </div>
                <input type='submit' value='Login'/>
                <div className='signup'>
                   Not a Member?Sign up
                </div>
            </form>
            </div>
        </div>
  )
}

export default Login