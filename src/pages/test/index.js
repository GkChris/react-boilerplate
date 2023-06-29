import React from 'react';
import TestLocalStorage from './components/TestHooks/LocalStorage/index.test';
import TestSessionStorage from './components/TestHooks/SessionStorage/index.test';
import TestCookies from './components/TestHooks/Cookies/index.test';
import TestAuth from './components/TestAuth/index.test';


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