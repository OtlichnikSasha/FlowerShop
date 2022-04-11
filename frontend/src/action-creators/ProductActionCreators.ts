import axios from "axios";

export const getProduct = async (args: object) => {
    try {
        return await axios.get("/product", {params: { ...args }})
    } catch (e: any) {
        console.log('error', e.response.data.error)
    }
}

export const createProduct = async (data: object) => {
    try {
        return await axios.post("/product", data)
    } catch (e: any) {
        console.log('error', e.response.data.error)
    }
}