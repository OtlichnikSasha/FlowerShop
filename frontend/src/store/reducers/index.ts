import {combineReducers} from "redux";
import categoriesReducer from "./categoriesReducer";
import basketReducer from "./basketReducer";
import subCategoriesReducer from "./subCategoriesReducer";
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import flowerReducer from "./flowerReducer";
import userReducer from "./userReducer";
import userLoginReducer from "./userLoginReducer";
import favoriteReducer from "./favoriteReducer";
import popularProductsReducer from "./popularProductsReducer";
import cellProductsReducer from "./cellProductsReducer";
import similarProductsReducer from "./similarProductsReducer";


export const rootReducer = combineReducers({
    categories: categoriesReducer,
    basket: basketReducer,
    subCategories: subCategoriesReducer,
    products: productsReducer,
    product: productReducer,
    flowers: flowerReducer,
    user: userReducer,
    userLogin: userLoginReducer,
    favorite: favoriteReducer,
    similarProducts: similarProductsReducer,
    popularProducts: popularProductsReducer,
    cellProducts: cellProductsReducer
})

export type RootState = ReturnType<typeof rootReducer>