import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1";

const instance = axios.create({
  baseURL: baseUrl,
});

const authInstance = axios.create({
  baseURL: "http://localhost:8001/api/v1/users",
});

export { instance as axios, authInstance as auth };
