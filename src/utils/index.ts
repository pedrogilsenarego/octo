import axios from "axios";


const production = "https://us-central1-octo-29041.cloudfunctions.net/api"
const local = "http://localhost:5001/octo-29041/us-central1/api"
export const apiInstance = axios.create({
  baseURL:local
})