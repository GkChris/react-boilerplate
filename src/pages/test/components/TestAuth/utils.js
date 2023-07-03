import Domains from "../../../../config/domains";
import { get_testAuth, post_login, post_logout, post_register } from "./requests";

const backendURI = Domains.backend;



export const register = () => {
    const url = `${backendURI}/auth/register`;
    const body = {
        "data": {
            "username": "myusername",
            "firstname": "myusername",
            "lastname": "myusername",
            "email": "myusername@gmail.com",
            "phone": "myusername",
            "phone_code": "30",
            "roleId": "649a9102cac7f1d201aa785a",
            "realmId": "649a9102cac7f1d201aa7853",
            "clientId": "649a9102cac7f1d201aa7855",
            "password": "Test12345"
        }
    }
    const options = { withCredentials: true }

    post_register(url, body, options)
        .then((res) => console.log('res',res))
        .catch((err) => console.error(err));
}


export const login = () => {

    const url = `${backendURI}/auth/login`;
    const body = {
        "data": {
            "email": "myusername@gmail.com",
            "realmId": "649a9102cac7f1d201aa7853",
            "clientId": "649a9102cac7f1d201aa7855",
            "password": "Test12345",
        }
    }
    const options = { withCredentials: true }

    post_login(url, body, options)
        .then((res) => console.log('res',res))
        .catch((err) => console.error(err));
}


export const logout = () => {  
    const url = `${backendURI}/auth/logout`;
    const body = {};
    const options = { withCredentials: true }
    
    post_logout(url, body, options)
        .then((res) => console.log('res',res))
        .catch((err) => console.error(err));
}


export const testAuth = () => {
    const url = `${backendURI}/auth/testAuth`;

    get_testAuth(url)
        .then((res) => console.log('res',res))
        .catch((err) => console.error(err));
}