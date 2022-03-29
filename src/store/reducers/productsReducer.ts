import {ActionProductsTypes, ProductsActionTypes, ProductsState} from "../../types/products";

const initialState : ProductsState = {
    products: [],
    status: false,
    error: '',
    loading: false
}

export const productsReducer = (state = initialState, action: ProductsActionTypes) : ProductsState => {
    switch (action.type){
        case ActionProductsTypes.FETCH_PRODUCTS:
            return {loading: true, status: null, products: [], error: null}
        case ActionProductsTypes.FETCH_PRODUCTS_SUCCESS:
            return {loading: false, status: true, products: action.payload, error: null}
        case ActionProductsTypes.FETCH_PRODUCTS_ERROR:
            return {loading: false, status: false, products: [], error: action.payload}
        default:
            return state
    }
}

