import axios from "axios";

export const getSubCategories = async (args: object) => {
    try {
        return await axios.get("/api/subCategories", {params: { ...args }} )
    } catch (e: any) {
        return console.log('error', e.response.data.error)
    }
}


export const createSubCategory = async (data: object) => {
    try {
        return await axios.post("/api/subCategories", data)
    } catch (e: any) {
        return console.log('error', e.response.data.error)
    }
}