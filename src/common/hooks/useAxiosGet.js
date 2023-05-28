import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosGet = (url) => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
        
        axios.get(url)
        .then((res) => {
            setData(res);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        })
  
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useAxiosGet;
