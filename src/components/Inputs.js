import { React, useState } from 'react';
import styled from 'styled-components'

const InputLabel = styled.label`
    padding-right: 10px;
    font-size: 20px;
`;

const InputWrapper = styled.div`
    display: flex;
    vertical-align: middle;
    margin: 15px 0 10px 0;
`;

const StyledTextInput = styled.input.attrs(({id, type}) => ({
    type: type,
    id: id
}))`
    border: 2px solid green;
    border-radius: 10px;
    height: 20px;
`;

export const TextInput = ({id, type, label}) => {
    const [name, setName] = useState("");

    const handleNameChange = e => {
        setName(e.target.value);
    }

    return (
        <InputWrapper className="inputDiv">
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <StyledTextInput id={id} value={name} type={type} onChange={handleNameChange} />
        </InputWrapper>
    );
};

const StyledCheckboxInput = styled.input.attrs(({id}) => ({
    type: 'checkbox',
    id: id
}))`
    height: 20px;
    width: 20px;
`;

export const CheckboxInput = ({id, label}) => {
    return (
        <InputWrapper className="inputDiv">
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <StyledCheckboxInput id={id} />
        </InputWrapper>
    );
};

const StyledRadioInput = styled.input.attrs(({id}) => ({
    type: 'radio',
    id: id
}))`
    height: 20px;
    width: 20px;
`;

export const RadioInput = ({id, label}) => {
    return (
        <InputWrapper className="inputDiv">
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <StyledRadioInput id={id} />
        </InputWrapper>
    );
}
