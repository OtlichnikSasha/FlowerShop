export interface CategoriesState {
    categories: any[],
    status: boolean | null,
    error: string | null,
    loading: boolean
}

export interface CategoryState {
    id: number,
    name: string
}

export enum ActionCategoriesTypes {
    FETCH_CATEGORIES = "FETCH_CATEGORIES",
    FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR"
}

export interface FetchCategoriesAction {
    type: ActionCategoriesTypes.FETCH_CATEGORIES
}

export interface FetchCategoriesSuccessAction {
    type: ActionCategoriesTypes.FETCH_CATEGORIES_SUCCESS
    payload: []
}

export interface FetchCategoriesErrorAction {
    type: ActionCategoriesTypes.FETCH_CATEGORIES_ERROR
    payload: string
}

export type CategoriesActionTypes = FetchCategoriesAction | FetchCategoriesSuccessAction | FetchCategoriesErrorAction