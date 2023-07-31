
import axios from "axios"

const basisUrl="http://localhost:3001"



const instance=axios.create({
    baseURL:basisUrl
})

export default instance


