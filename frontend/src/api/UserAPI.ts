import axios from "axios";

export const fetchUser = () => {
    return async () => {
        try {
            return await axios.get("http:localhost:5000/api/user")
        } catch (e: any) {
            console.log('error', e.response.data.error)
        }
    }
}