import React from 'react';
import useSessionStorage from '../../../../../common/hooks/useSessionStorage';
import BrowserDatabaseKeys from '../../../../../config/browserDatabaseKeys';


const TestSessionStorage = () => {
    
    const [value, setValue] = useSessionStorage(BrowserDatabaseKeys.sessionStorage.myKey, 'Default Value');
    
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

export default TestSessionStorage