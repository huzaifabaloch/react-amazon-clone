import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = (e) => {
        e.preventDefault(); // prevent the page from reloading 
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    const Register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // successfully create user in firebase
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                className='login__logo' 
                src='https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png' alt='' />
            </Link>
            <div className='login__container'>
                <h1>Log in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button
                    type='submit'
                    onClick={Login}
                    className='login__loginButton'>
                    Log in
                    </button>
                </form>
                <p>
                By signing-in you agree to Amazon's Conditions of Use & Sale. 
                Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button
                onClick={Register} 
                className='login__registerButton'>
                Create your Amazon account
                </button>
            </div>
        </div>
    )
}

export default Login
