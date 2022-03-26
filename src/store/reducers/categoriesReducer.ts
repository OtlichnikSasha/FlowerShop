

interface CategoriesState {
    categories: object[],
    status: boolean,
    error: string,
    loading: boolean
}

const initialState : CategoriesState = {
    categories: [],
    status: false,
    error: '',
    loading: false
}


export const categoriesReducer = (state = initialState, action: { type: any }) => {
    switch (action.type){
        case "FETCH_CATEGORIES" : return {

        }
    }
}
