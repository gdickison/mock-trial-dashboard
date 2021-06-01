import { React, Fragment, useState } from 'react';
import { TextInput, CheckboxInput, RadioInput } from './Inputs';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    return (
        <Fragment>
            <TextInput id={Math.floor(Math.random() * 100000)} label="First Input" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <TextInput id={Math.floor(Math.random() * 100000)} label="Second Input"/>
            <CheckboxInput id={Math.floor(Math.random() * 100000)} label="Third Input"/>
            <RadioInput id={Math.floor(Math.random() * 100000)} label="Fourth Input"/>
        </Fragment>
    );
};

export default Registration;