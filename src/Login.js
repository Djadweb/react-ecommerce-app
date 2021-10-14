import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Link, useHistory } from 'react-router-dom'
import './scss/Login.scss'
import Support from './Support'
import Footer from './Footer'
import Header from './Header'

import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Header/>
            <div className="container">                
                <div className="login__box">
                    <h3>Registered Customers</h3>
                    <p>If you have an account, sign in with your email address.</p>
                    <div className="login__form">
                        <div className="email-section">
                            <label>Email</label>
                            <input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Your Email" />
                        </div>
                        <div className="password-section">
                            <label>Password</label>
                            <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Your Password" />
                        </div>
                        <div className="validation">
                            <Button onClick={login} className="btn3">Sign in</Button>
                            <Button onClick={register} className="btn1">Create my account</Button>
                        </div>                    
                    </div>
                </div>
            </div>            
            <Support />
            <Footer/>
        </div>
    )
}

export default Login
