import {ActionBasketTypes, BasketActionTypes, BasketState} from "../../types/basket";

const initialState : BasketState = {
    basket: {},
    status: false,
    error: '',
    loading: false
}

export const basketReducer = (state = initialState, action: BasketActionTypes) : BasketState => {
    switch (action.type){
        case ActionBasketTypes.FETCH_BASKET :
            return {loading: true, status: null, basket: {}, error: null}
        case ActionBasketTypes.FETCH_BASKET_SUCCESS :
            return {loading: false, status: true, basket: action.payload, error: null}
        case ActionBasketTypes.FETCH_BASKET_ERROR :
            return {loading: false, status: false, basket: {}, error: action.payload}
        default:
            return state
    }
}
