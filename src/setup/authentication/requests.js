import axios from "axios"
import Domains from "../../config/domains";

const backendURI = Domains.backend;

// For ids check the appConfig. Request to fetch and store the ids by name will be handled in interceptors later on

export const register = (payload) => {
    return new Promise((resolve, reject) => {
        const url = `${backendURI}/auth/register`;
        const options = { withCredentials: true };
        payload.roleId = "649a9102cac7f1d201aa785a";
        payload.realmId = "649a9102cac7f1d201aa7853";
        payload.clientId = "649a9102cac7f1d201aa7855";
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
        payload.realmId = "649a9102cac7f1d201aa7853";
        payload.clientId = "649a9102cac7f1d201aa7855";
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

export const testAuth = () => {
    return new Promise((resolve, reject) => {
        const url = `${backendURI}/auth/testAuth`;
        axios.get(url)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}