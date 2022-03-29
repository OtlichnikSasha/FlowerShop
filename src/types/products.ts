export interface ProductsState {
    products: [],
    status: boolean | null,
    error: string | null,
    loading: boolean
}

export enum ActionProductsTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR"
}

export interface FetchProductsAction {
    type: ActionProductsTypes.FETCH_PRODUCTS
}

export interface FetchProductsSuccessAction {
    type: ActionProductsTypes.FETCH_PRODUCTS_SUCCESS
    payload: []
}

export interface FetchProductsErrorAction {
    type: ActionProductsTypes.FETCH_PRODUCTS_ERROR
    payload: string
}

export type ProductsActionTypes = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction