import React, { useEffect, useRef } from 'react';
import ButtonGoogle from '../../components/ButtonGoogleLogin';
import { useLocalStorage } from "../../hooks/LocalStorage.js";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const credentials = useLocalStorage('credentials')
    const navigate = useNavigate()
    useEffect(() => {
        credentials && navigate('/home')
    }, credentials)
    return <div style={{textAlign: 'center'}}>
        <h1>Login Page</h1>
        <ButtonGoogle/>
    </div>
}

export default LoginPage;