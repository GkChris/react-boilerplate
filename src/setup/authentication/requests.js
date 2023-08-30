import axios from "axios"
import Domains from "../../config/domains";
import { useAuthConfig } from '../context/authConfig'; // Update the import path

const backendURI = Domains.backend;


export const useAuthApi = () => {

    const { realmId, clientId, user_roleId } = useAuthConfig();

    const register = (payload) => {
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
    
    const login = (payload) => {
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
    
    const logout = (payload) => {
        return new Promise((resolve, reject) => {
            const url = `${backendURI}/auth/logout`;
            const options = { withCredentials: true }
            const body = {data: payload}
            axios.post(url, body, options)
                .then((res) => resolve(res))
                .catch((err) => reject(err))
        })
    }
    
    
    const verify = () => {
        return new Promise((resolve, reject) => {
            const url = `${backendURI}/auth/verify`;
            axios.get(url)
                .then((res) => resolve(res))
                .catch((err) => reject(err))
        })
    }
    
    const testAuth = () => {
        return new Promise((resolve, reject) => {
            const url = `${backendURI}/auth/testAuth`;
            axios.get(url)
                .then((res) => resolve(res))
                .catch((err) => reject(err))
        })
    }

    return {
        register,
        login,
        logout,
        verify,
        testAuth,
    };
}