import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosPost = (url, payload) => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sendData = () => {
        
        axios.post(url, {
          data: payload
        })
        .then((res) => {
            setData(res);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        })
  
    };

    sendData();
  }, [url]);

  return { data, loading, error };
};

export default useAxiosPost;
