import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : initialValue;
    });

	useEffect(() => {
			localStorage.setItem(key, JSON.stringify(value));
	},[key, value])

    const updateValue = (newValue) => {
		setValue(newValue);
		localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, updateValue];
};

export default useLocalStorage;
