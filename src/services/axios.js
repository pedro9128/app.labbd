import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost/crud"
});

export default http;
