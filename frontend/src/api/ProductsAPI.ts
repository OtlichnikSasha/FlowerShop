import axios from "axios";

export const getProducts = async (args: object) => {
        try {
            return await axios.get("/api/products", {params: { ...args }})
        } catch (e: any) {
            console.log('error', e.response.data.error)
        }
}
