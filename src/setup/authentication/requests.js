import axios from "axios"
import Domains from "../../config/domains";
import BrowserDatabaseKeys from "../../config/browserDatabaseKeys";

const backendURI = Domains.backend;
const realmId = sessionStorage.getItem(BrowserDatabaseKeys.sessionStorage.realmId);
const clientId = sessionStorage.getItem(BrowserDatabaseKeys.sessionStorage.clientId);
const user_roleId = sessionStorage.getItem(BrowserDatabaseKeys.sessionStorage.user_roleId);


export const register = (payload) => {
    return new Promise((resolve, reject) => {
        const url = `${backendURI}/auth/register`;
        const options = { withCredentials: true };
        payload.roleId = user_roleId;
        payload.realmId = realmId;
        payload.clientId = clientId;
        const body = {data: payload};
        axios.post(url, body, options)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const login = (payload) => {
    return new Promise((resolve, reject) => {
        const url = `${backendURI}/auth/login`;
        const options = { withCredentials: true };
        payload.realmId = realmId;
        payload.clientId = clientId;
        const body = {data: payload}
        axios.post(url, body, options)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const logout = (payload) => {
    return new Promise((resolve, reject) => {
        const url = `${backendURI}/auth/logout`;
        const options = { withCredentials: true }
        const body = {data: payload}
        axios.post(url, body, options)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}


export const verify = () => {
    return new Promise((resolve, reject) => {
        const url = `${backendURI}/auth/verify`;
        axios.get(url)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const testAuth = () => {
    return new Promise((resolve, reject) => {
        const url = `${backendURI}/auth/testAuth`;
        axios.get(url)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}