import React, { useState, useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';

const Login = () => {
    const { setUsername,setShowProfile }=useContext(LoginContext);

    return (
        <div className='inputs_div'>
            <input
             type="text"
             placeholder='Username...'
             onChange={event=>{
                 setUsername(event.target.value);
             }}
             />
             <input type='text' placeholder='Password...'/>
             <button onClick={()=>{
                 setShowProfile(true)
             }} >Login</button>
        </div>
    )
}

export default Login;
