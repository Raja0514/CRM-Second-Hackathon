import axios from "axios";
export default axios.create({
  baseURL: "http://Localhost:8080/api",
  headers: { "content-type": "application/JSON" },
});
