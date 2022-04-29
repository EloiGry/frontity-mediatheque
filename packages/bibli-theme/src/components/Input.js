import React from 'react';
import { connect } from 'frontity';
import { styled } from 'frontity';

const Input = ({placeholder, type, onChange, value}) => {
    return (
        <Inp
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value= {value} />
        
            
    );
};

const Inp = styled.input`
    border:0;
    outline:0;
    border-radius : 30px;
    width : 350px;
    height : 30px;
    padding : 7px;
    &:focus{
        background-color: #e9ecef;
    }`

export default connect(Input);