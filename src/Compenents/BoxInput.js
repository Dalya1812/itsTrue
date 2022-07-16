import React from 'react';
import Survey from '../Contains/Survey';
const BoxInput = ({searchChange}) => {

    return (
     <input className="sName" 
    type="text"
    placeholder="your name"
    onChange={searchChange}
    />
    );
}



export default BoxInput;