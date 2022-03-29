import {ActionProductTypes, ProductActionTypes, ProductState} from "../../types/product";


const initialState : ProductState = {
    product: {},
    status: false,
    error: '',
    loading: false
}

export const productReducer = (state = initialState, action: ProductActionTypes) : ProductState => {
    switch (action.type){
        case ActionProductTypes.FETCH_PRODUCT:
            return {loading: true, status: null, product: {}, error: null}
        case ActionProductTypes.FETCH_PRODUCT_SUCCESS :
            return {loading: false, product: action.payload, status: true, error: null}
        case ActionProductTypes.FETCH_PRODUCT_ERROR:
            return {loading: false, error: action.payload, status: false, product: {}}
        default:
            return state
    }
}
