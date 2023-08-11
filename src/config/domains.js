const Domains = {
    backend: `${process.env.REACT_APP_BACKEND_PROTOCOL}${process.env.REACT_APP_BACKEND_HOST}${process.env.REACT_APP_BACKEND_PORT}`,
    auth: `${process.env.REACT_APP_AUTH_SERVER_PROTOCOL}${process.env.REACT_APP_AUTH_SERVER_HOST}${process.env.REACT_APP_AUTH_SERVER_PORT}`,
}


export default Domains