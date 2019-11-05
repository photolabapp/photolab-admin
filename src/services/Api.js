import Axios from 'axios'

const axios = Axios.create({
    baseURL: "http://ec2-18-234-166-48.compute-1.amazonaws.com:8080",
    //baseURL: "http://localhost:8080",
    responseType: "json",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    },
});

export const getOrders = () => {
    return axios.get("/order/all")
}

export const getUserById = user => {
    return axios.get("/user/" + user)
}