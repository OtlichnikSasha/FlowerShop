import axios from "axios";

export const getCategories = async () => {
    try {
        return await axios.get("/api/categories")
    } catch (e: any) {
        return console.log('error', e.response.data.error)
    }
}


export const createCategory = (data: object) => {
    return async () => {
        try {
            return await axios.post("/api/categories", data)
        } catch (e: any) {
            console.log('error', e.response.data.error)
        }
    }
}