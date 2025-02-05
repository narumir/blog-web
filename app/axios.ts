import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_SERVER,
  withCredentials: true,
});

export default instance;
