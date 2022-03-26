import {combineReducers} from "redux";
import {userReducer} from './userReducer'
import {categoriesReducer} from "./categoriesReducer";
import {subCategoriesReducer} from "./subCategoriesReducer";
import {basketReducer} from "./basketReducer";
export const rootReducer = combineReducers({
    // user: userReducer,
    // categories: categoriesReducer,
    // subCategories: subCategoriesReducer,
    // basket: basketReducer
})