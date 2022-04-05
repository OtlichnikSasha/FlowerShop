import axios from "axios";
// @ts-ignore
import { APP_SERVER_BASE } from '@env'



export const getBasket = (args: object) => {
    return async () => {
        try {
            return await axios.get(APP_SERVER_BASE + "basket", { params: { ...args } })
        } catch (e: any) {
            console.log('error', e.response.data.error)
            return e.response.data.error
        }
    }
}