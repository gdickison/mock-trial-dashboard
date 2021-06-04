import React, { Fragment, useState } from 'react';
import { TextInput } from '../components/Inputs';

const Auth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();

    const authHandler = e => {
        e.preventDefault();
        console.log("Login");
    }
    return (
        <Fragment>
            <h1>Login required</h1>
            <form onSubmit={authHandler}>
                <TextInput id="username" label="Username" type="text" />
                <TextInput id="password" label="Password" type="password" />
                <button className="link" type="submit">Login</button>
            </form>
            <div>
                <p>Don't have an account yet?</p>
                <button className="link" onClick={() => console.log("sign up")}>Sign Up</button>
            </div>
        </Fragment>
    );
};

export default Auth;