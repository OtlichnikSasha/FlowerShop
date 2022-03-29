import {combineReducers} from "redux";
import {userReducer} from './userReducer'
import {categoriesReducer} from "./categoriesReducer";
import {subCategoriesReducer} from "./subCategoriesReducer";
import {basketReducer} from "./basketReducer";
import {productReducer} from "./productReducer";
import {productsReducer} from "./productsReducer";
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    subCategories: subCategoriesReducer,
    basket: basketReducer,
    product: productReducer,
    products: productsReducer
})

export type RootState = ReturnType<typeof rootReducer>