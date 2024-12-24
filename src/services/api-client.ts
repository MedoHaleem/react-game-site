import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '82c69073921441ddbba45bb42211cad2'
    }
})