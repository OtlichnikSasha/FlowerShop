import {
    UserState,
    ActionUserTypes,
    UserActionTypes
} from "../../types/user";


const initialState : UserState = {
    user: {},
    status: false,
    error: '',
    loading: false
}

export const userReducer = (state = initialState, action: UserActionTypes) : UserState => {
    switch (action.type){
        case ActionUserTypes.FETCH_USER:
            return {loading: true, status: null, user: {}, error: null}
        case ActionUserTypes.FETCH_USER_SUCCESS :
            return {loading: false, user: action.payload, status: true, error: null}
        case ActionUserTypes.FETCH_USER_ERROR:
            return {loading: false, error: action.payload, status: false, user: {}}
        default:
            return state
    }
}
