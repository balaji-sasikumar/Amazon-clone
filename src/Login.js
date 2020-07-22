import React, { useState } from 'react';
import './Login.css';
import { Link,useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history=useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                history.push('/');

            })
            .catch(e=>alert(e.message));
    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/');

            })
            .catch(e=>alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"
                    alt="logo here" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event=>setemail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password}  onChange={event=>setpassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signinbutton">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale.
                Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className="login__registerbutton">Create Your Account</button>
            </div>

        </div>
    )
}

export default Login
