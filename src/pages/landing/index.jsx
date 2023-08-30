import React from 'react';
import { useNavigate } from 'react-router-dom';


const Landing = () => {

    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate('/protected')}>Protecred Page</button>
            <button onClick={() => navigate('/test')}>Test Page</button>
            <button onClick={() => navigate('/login')}>Login Page</button>
            <button onClick={() => navigate('/register')}>Register Page</button>
        </>
    )
}

export default Landing