import axios from 'axios'

// lowest level API services, should only be used by client.js

export const sampleGet = (baseURL) => {
    return axios.get(baseURL)
};