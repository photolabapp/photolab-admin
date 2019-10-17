import Axios from 'axios'

const axios = Axios.create({
    baseURL: "http://192.168.1.106:8080",
    responseType: "json",
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

export const getOrders = () => {
    return axios.get("order/all")
}

export const getUserById = userId => {
    return axios.get("user/id", userId)
}