

interface SubCategoriesState {
    subCategories: object[],
    status: boolean,
    error: string,
    loading: boolean
}

const initialState : SubCategoriesState = {
    subCategories: [],
    status: false,
    error: '',
    loading: false
}


export const subCategoriesReducer = (state = initialState, action: { type: any }) => {
    switch (action.type){
        case "FETCH_SUBCATEGORIES" : return {

        }
    }
}
