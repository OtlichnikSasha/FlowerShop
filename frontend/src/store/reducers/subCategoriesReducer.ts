import {ActionSubCategoriesTypes, SubCategoriesActionTypes, SubCategoriesState} from "../../types/subCategories";

const initialState : SubCategoriesState = {
    subCategories: [],
    status: false,
    error: '',
    loading: false
}

export const subCategoriesReducer = (state = initialState, action: SubCategoriesActionTypes) : SubCategoriesState => {
    switch (action.type){
        case ActionSubCategoriesTypes.FETCH_SUBCATEGORIES:
            return {loading: true, status: null, subCategories: [], error: null}
        case ActionSubCategoriesTypes.FETCH_SUBCATEGORIES_SUCCESS:
            return {loading: false, status: true, subCategories: action.payload, error: null}
        case ActionSubCategoriesTypes.FETCH_SUBCATEGORIES_ERROR:
            return {loading: false, status: false, subCategories: [], error: action.payload}
        default:
            return state
    }
}

