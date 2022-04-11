import {combineReducers} from "redux";
import categoriesReducer from "./categoriesReducer";
import basketReducer from "./basketReducer";
import subCategoriesReducer from "./subCategoriesReducer";
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";


export const rootReducer = combineReducers({
    categories: categoriesReducer,
    basket: basketReducer,
    subCategories: subCategoriesReducer,
    products: productsReducer,
    product: productReducer
})

export type RootState = ReturnType<typeof rootReducer>