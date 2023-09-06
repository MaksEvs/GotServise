import React from "react";
import './errorMessage.css';
import img from './errorIcon.png';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Something does wrong</span>
        </>
    )
}

export default ErrorMessage;