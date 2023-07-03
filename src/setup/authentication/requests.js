import axios from "axios"

export const register = (url, body, options) => {
    return new Promise((resolve, reject) => {
        axios.post(url, body, options)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const login = (url, body, options) => {
    return new Promise((resolve, reject) => {
        axios.post(url, body, options)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const logout = (url, body, options) => {
    return new Promise((resolve, reject) => {
        axios.post(url, body, options)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const testAuth = (url, options, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, options, params)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}