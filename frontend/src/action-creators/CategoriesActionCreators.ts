import axios from "axios";
// @ts-ignore
import { APP_SERVER_BASE } from '@env'



export const getCategories = () => {
    return async () => {
        try {
            return await axios.get(APP_SERVER_BASE + "categories")
        } catch (e: any) {
            console.log('error', e.response.data.error)
        }
    }
}