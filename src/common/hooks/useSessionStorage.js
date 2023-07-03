import { useState, useEffect } from 'react';

const useSessionStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const sessionStorageValue = sessionStorage.getItem(key);
        return sessionStorageValue ? JSON.parse(sessionStorageValue) : initialValue;
    });

    // useEffect(() => {
    //    sessionStorage.setItem(key, JSON.stringify(value));
    // }, [key, value]);

    const updateValue = (newValue) => {
        setValue(newValue);
        sessionStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, updateValue];
};

export default useSessionStorage;
