
export interface BasketState {
    basket: object,
    status: boolean | null,
    error: string | null,
    loading: boolean
}
export enum ActionBasketTypes {
    FETCH_BASKET = "FETCH_BASKET",
    FETCH_BASKET_SUCCESS = "FETCH_BASKET_SUCCESS",
    FETCH_BASKET_ERROR = "FETCH_BASKET_ERROR"
}

export interface FetchBasketAction {
    type: ActionBasketTypes.FETCH_BASKET
}

export interface FetchBasketSuccessAction {
    type: ActionBasketTypes.FETCH_BASKET_SUCCESS
    payload: object
}

export interface FetchBasketErrorAction {
    type: ActionBasketTypes.FETCH_BASKET_ERROR
    payload: string
}

export type BasketActionTypes = FetchBasketAction | FetchBasketSuccessAction | FetchBasketErrorAction