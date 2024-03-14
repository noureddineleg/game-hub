import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "a4d89a626500482ca5a3337fffc4b2a8"
    }
})