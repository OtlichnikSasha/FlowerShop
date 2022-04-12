import {$host} from "../http/index";

export const getSubCategories = async (args: object) => {
    try {
        return await $host.get("/api/subCategories", {params: { ...args }} )
    } catch (e: any) {
        return console.log('error', e.response.data.error)
    }
}


export const createSubCategory = async (data: object) => {
    try {
        return await $host.post("/api/subCategories", data)
    } catch (e: any) {
        return console.log('error', e.response.data.error)
    }
}