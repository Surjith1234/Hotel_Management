import React from 'react'
import "./Register.css"
const Register = () => {
  return (
    <div className='register'>
        <div className='registercontainer'>
            <h1>Register</h1>
            <form>
                <div className='reg_inp'>
                   <input type='text' ></input>
                   <span></span>
                   <label>User Name</label>
                </div>
                <div className='reg_inp'>
                   <input type='text'></input>
                   <span></span>
                   <label>Password</label>
                </div>
                <div className='reg_inp'>
                   <input type='text'></input>
                   <span></span>
                   <label>Repeat Password</label>
                </div>
                <input type='submit' value='submit'></input>
            </form>
        </div>
    </div>
  )
}
export default Register