import axios from "axios"

export const post_register = (url, body, options) => {
    return new Promise((resolve, reject) => {
        axios.post(url, body, options)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const post_login = (url, body, options) => {
    return new Promise((resolve, reject) => {
        axios.post(url, body, options)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const post_logout = (url, body, options) => {
    return new Promise((resolve, reject) => {
        axios.post(url, body, options)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const get_testAuth = (url, options, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, options, params)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}