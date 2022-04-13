import axios from "axios";


export const getFlowers = async () => {
    try {
        return await axios.get('/api/flowers')
    } catch (e: any) {
        return console.log('error', e.response.data.error)
    }
}


export const createFlower = async (data: object) => {
    try {
        return await axios.post("/api/flowers", data)
    } catch (e: any) {
        console.log('error', e.response.data.error)
    }
}