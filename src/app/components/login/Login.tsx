import React, {useState} from 'react';
import './Login.css';
import {Navigate} from "react-router-dom";

const EMAIL_CORRECT = 'admin@admin.com';
const PASSWORD_CORRECT = 'admin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const loginFn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (email === EMAIL_CORRECT && password === PASSWORD_CORRECT) {
            setRedirect(true);
        }
    }

    return (
        <>
            {redirect && <Navigate to="/dashboard" replace/>}
            <main className="container" style={{marginTop: '4rem', width: '40rem'}}>
                <article className="grid">
                    <div>
                        <hgroup>
                            <h1>Login</h1>
                            <h2>Please fill the fields for entering</h2>
                        </hgroup>
                        <form>
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)}
                                   placeholder="Email address" required/>
                            <small>We'll never share your email with anyone else.</small>
                            <label htmlFor="email">Password</label>
                            <input type="password" id="password" name="password"
                                   onChange={e => setPassword(e.target.value)}
                                   placeholder="Password" required/>
                            <button type="submit" onClick={event => loginFn(event)}>Login</button>
                        </form>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Login;
