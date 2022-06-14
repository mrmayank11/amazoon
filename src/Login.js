import React, { useState } from 'react'
import "./Login.css"
import { NavLink, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = s => {
        s.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <NavLink to="/">
                <div className="logo_img">
                    <img className='login_logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'></img>
                </div>

            </NavLink>
            <div className="login_panel">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email or mobile number</h5>
                    <input type={'text'} value={email} onChange={e => setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type={"password"} value={password} onChange={e => setPassword(e.target.value)}></input>
                </form>

                <button type={"submit"} onClick={signIn}>Sign In</button>

                <p1>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p1>

                <button className='new_user' type={"submit"} onClick={register}>Create your Amazon account</button>

            </div>

        </div>
    )
}

export default Login