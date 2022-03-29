import {ActionUserTypes, UserActionTypes} from "../types/user";
import {Dispatch} from "redux";
import axios from "axios";
// @ts-ignore
import { APP_SERVER_BASE } from '@env'



export const fetchCategories = () => {
    return async (dispatch: Dispatch<UserActionTypes>) => {
        try {
            dispatch({type: ActionUserTypes.FETCH_USER})
            const res = await axios.get(APP_SERVER_BASE + "user")
            dispatch({type: ActionUserTypes.FETCH_USER_SUCCESS, payload: res.data})
        } catch (e: any) {
            console.log('error', e.response.data.error)
            dispatch({type: ActionUserTypes.FETCH_USER_ERROR, payload: e.response.data.error})
        }
    }
}