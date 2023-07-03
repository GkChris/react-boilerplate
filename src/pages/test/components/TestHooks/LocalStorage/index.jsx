import React from 'react';
import useLocalStorage from '../../../../../common/hooks/useLocalStorage';
import BrowserDatabaseKeys from '../../../../../config/browserDatabaseKeys';


const TestLocalStorage = () => {
    
    const [value, setValue] = useLocalStorage(BrowserDatabaseKeys.localStorage.myKey, 'initialValue');
    
    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <p>Stored value: {value}</p>
        </>
    )
}

export default TestLocalStorage