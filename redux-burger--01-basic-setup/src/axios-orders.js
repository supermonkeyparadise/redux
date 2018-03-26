import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d8ede.firebaseio.com/'
});

export default instance;