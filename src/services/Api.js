import Axios from 'axios'

const axios = Axios.create({
    baseURL: "http://localhost:8080",
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