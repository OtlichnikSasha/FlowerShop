import axios from "axios";

export const getBasket = (args: object) => {
    return async () => {
        try {
            return await axios.get("http:localhost:5000/api/basket", { params: { ...args } })
        } catch (e: any) {
            return e.response.data.error
        }
    }
}