import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    };

    return (
        <div className='login'>
            <div className='login_container'>
                <div className='login_img'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/1013px-Discord_logo.svg.png' alt='discord_logo'/>
                </div>
                <Button onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login
