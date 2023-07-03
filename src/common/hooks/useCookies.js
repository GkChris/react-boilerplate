import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useCookies = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		const cookieValue = Cookies.get(key);
		return cookieValue ? JSON.parse(cookieValue) : initialValue;
	});

	useEffect(() => {
			Cookies.set(key, JSON.stringify(value)); // Update the cookie whenever the value changes
	}, [key, value]);

	const updateValue = (newValue) => {
		setValue(newValue);
		Cookies.set(key, JSON.stringify(newValue));
	};

	return [value, updateValue];
};

export default useCookies;
