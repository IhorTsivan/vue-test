import Vue from "vue";
import axios from 'axios';
import { baseUrl } from "@/api/constants";

const axiosInstance = axios.create({
    timeout: 25000,
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
    response => response,
    ({response}) => {
        Vue.$toast.error(response.data.message);
    });

export const get = (endpoint, params, options) => {
    return axiosInstance({ url: endpoint, method: 'GET', params, ...options })
}
