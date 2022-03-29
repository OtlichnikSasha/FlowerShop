import {ActionCategoriesTypes, CategoriesActionTypes, CategoriesState} from "../../types/categories";

const initialState : CategoriesState = {
    categories: [],
    status: false,
    error: '',
    loading: false
}

export const categoriesReducer = (state = initialState, action: CategoriesActionTypes) : CategoriesState => {
    switch (action.type){
        case ActionCategoriesTypes.FETCH_CATEGORIES:
            return {loading: true, status: null, categories: [], error: null}
        case ActionCategoriesTypes.FETCH_CATEGORIES_SUCCESS:
            return {loading: false, status: true, categories: action.payload, error: null}
        case ActionCategoriesTypes.FETCH_CATEGORIES_ERROR:
            return {loading: false, status: false, categories: [], error: action.payload}
        default:
            return state
    }
}
