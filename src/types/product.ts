export interface ProductState {
    product: object,
    status: boolean | null,
    error: string | null,
    loading: boolean
}

export enum ActionProductTypes {
    FETCH_PRODUCT = "FETCH_PRODUCT",
    FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS",
    FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR"
}

export interface FetchProductAction {
    type: ActionProductTypes.FETCH_PRODUCT
}

export interface FetchProductSuccessAction {
    type: ActionProductTypes.FETCH_PRODUCT_SUCCESS
    payload: object
}

export interface FetchProductErrorAction {
    type: ActionProductTypes.FETCH_PRODUCT_ERROR
    payload: string
}

export type ProductActionTypes = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction