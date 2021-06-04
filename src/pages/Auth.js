import React, { Fragment } from 'react';
import { TextInput } from '../components/Inputs';

const Auth = () => {
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
                <button type="submit">Login</button>
            </form>
        </Fragment>
    );
};

export default Auth;