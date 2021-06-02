import { React, Fragment, useState } from 'react';
import { TextInput, CheckboxInput, RadioInput } from './Inputs';
import NavLinks from './NavigationMenu';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    return (
        <Fragment>
            <h1>This is the Team Registration page</h1>
            <NavLinks />
            <TextInput id={Math.floor(Math.random() * 100000)} label="First Input" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <TextInput id={Math.floor(Math.random() * 100000)} label="Second Input"/>
            <CheckboxInput id={Math.floor(Math.random() * 100000)} label="Third Input"/>
            <RadioInput id={Math.floor(Math.random() * 100000)} label="Fourth Input"/>
        </Fragment>
    );
};

export default Registration;