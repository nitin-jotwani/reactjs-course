import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-nitin.firebaseio.com/'
});

export default instance;
