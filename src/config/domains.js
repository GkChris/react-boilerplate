const Domains = {
    backend: `${process.env.BACKEND_PROTOCOL}${process.env.BACKEND_HOST}${process.env.BACKEND_PORT}`,
    auth: `${process.env.AUTH_SERVER_PROTOCOL}${process.env.AUTH_SERVER_HOST}${process.env.AUTH_SERVER_PORT}`,
}


export default Domains