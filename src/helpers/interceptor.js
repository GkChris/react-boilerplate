import axios from 'axios';
// import Cookies from 'js-cookie';
import BrowserDatabaseKeys from '../config/browserDatabaseKeys';


export const ReqInterceptor = () => {
    axios.interceptors.request.use((req) => {
        // const authToken = Cookies.get('authorization');
        // if (authToken) {
        //     req.headers.authorization = authToken;
        // }
        return req;
    });
};

export const ResInterceptor = () => {
    axios.interceptors.response.use((res) => {
        if ( res.data?.data?.user ) sessionStorage.setItem(BrowserDatabaseKeys.sessionStorage.user, JSON.stringify(res.data.data.user));
        return res;
    })
};  
