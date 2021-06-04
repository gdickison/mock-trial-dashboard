import { React, Fragment, useState } from 'react';
import { TextInput, CheckboxInput, RadioInput } from '../components/Inputs';
import NavLinks from '../components/NavigationMenu';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleRegistrationSubmit = e => {
        e.preventDefault();
        console.log("Registered");
    }
    return (
        <Fragment>
            <h1>This is the Team Registration page</h1>
            <NavLinks />
            <form onSubmit={handleRegistrationSubmit}>
                <TextInput id="first_name" label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                <TextInput id="last_name" label="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                <CheckboxInput id={Math.floor(Math.random() * 100000)} label="Third Input"/>
                <RadioInput id={Math.floor(Math.random() * 100000)} label="Fourth Input"/>
                <button type="submit">Submit Registration</button>
            </form>
        </Fragment>
    );
};

export default Registration;