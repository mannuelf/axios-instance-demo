import axios from 'axios';

const options = {
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
    method: 'get'
}

export const myAxios = axios.create(options);