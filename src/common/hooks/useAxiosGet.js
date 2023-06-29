import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosGet = (url, headers = {}, query = {}) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = () => {
			axios
				.get(url, {
					headers: headers,
					params: query,
				})
				.then((res) => {
					setData(res.data);
					setLoading(false);
				})
				.catch((error) => {
					setError(error);
					setLoading(false);
				});
		};

		fetchData();
	}, [url, headers, query]);

  return { data, loading, error };
};

export default useAxiosGet;
