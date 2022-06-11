import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1";

const instance = axios.create({
  baseURL: baseUrl,
});

export { instance as axios };
