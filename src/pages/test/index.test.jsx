import React from 'react';
import TestLocalStorage from './components/TestHooks/LocalStorage/index.jsx';
import TestSessionStorage from './components/TestHooks/SessionStorage/index.jsx';
import TestCookies from './components/TestHooks/Cookies/index.jsx';
import TestAuth from './components/TestAuth/index.jsx';


const Test = () => {

    return (
        <>
            <h1>Test Page</h1>

            <h4>Test hooks</h4>
            <h5>Local Storage</h5>
            <TestLocalStorage />

            <h5>Session Storage</h5>
            <TestSessionStorage />

            <h5>Cookies</h5>
            <TestCookies />

            <h5>Auth</h5>
            <TestAuth />
        </>
    )
}

export default Test