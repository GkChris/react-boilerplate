import axios from 'axios';
import Cookies from 'js-cookie';

export const ReqInterceptor = () => {
    axios.interceptors.request.use((req) => {
        const authToken = Cookies.get('authorization');
        if (authToken) {
            req.headers.authorization = authToken;
        }
        return req;
    });
};

export const ResInterceptor = () => {
    axios.interceptors.response.use((res) => {

        // Write the code to store user informations on the browser

        return res;
    })
};  
