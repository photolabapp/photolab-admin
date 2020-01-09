import Axios from 'axios'

const axios = Axios.create({
    //baseURL: "http://ec2-3-84-164-8.compute-1.amazonaws.com:8080",
    baseURL: "http://192.168.0.7:8080",
    responseType: "json",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    },
});

export const getOrders = () => {
    return axios.get("/order")
}

export const getOrder = order => {
    return axios.get("/order/" + order)
}

export const getUserById = user => {
    return axios.get("/user/" + user)
}

export const getOrderPhotosByOrderId = order => {
    return axios.get("/photo/order/" + order)
}
