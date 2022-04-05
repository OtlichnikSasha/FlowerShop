export interface SubCategoriesState {
    subCategories: object[],
    status: boolean | null,
    error: string | null,
    loading: boolean
}

export enum ActionSubCategoriesTypes {
    FETCH_SUBCATEGORIES = "FETCH_SUBCATEGORIES",
    FETCH_SUBCATEGORIES_SUCCESS = "FETCH_SUBCATEGORIES_SUCCESS",
    FETCH_SUBCATEGORIES_ERROR = "FETCH_SUBCATEGORIES_ERROR"
}

export interface FetchSubCategoriesAction {
    type: ActionSubCategoriesTypes.FETCH_SUBCATEGORIES
}

export interface FetchSubCategoriesSuccessAction {
    type: ActionSubCategoriesTypes.FETCH_SUBCATEGORIES_SUCCESS
    payload: []
}

export interface FetchSubCategoriesErrorAction {
    type: ActionSubCategoriesTypes.FETCH_SUBCATEGORIES_ERROR
    payload: string
}

export type SubCategoriesActionTypes = FetchSubCategoriesAction | FetchSubCategoriesSuccessAction | FetchSubCategoriesErrorAction