import axios from 'axios';

const instance = axios.create({
    baseURL: '...' // this is where we have THE API (cloud function) URL
});

export default instance;