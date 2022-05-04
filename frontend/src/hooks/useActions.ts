import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CategoriesReducer from "../store/reducers/categoriesReducer"
import * as SubCategoriesReducer from "../store/reducers/subCategoriesReducer"
import * as ProductsReducer from "../store/reducers/productsReducer"
import * as ProductReducer from "../store/reducers/productReducer"
import * as FlowerReducer from "../store/reducers/flowerReducer"
import * as UserReducer from "../store/reducers/userReducer"
import * as UserLoginReducer from "../store/reducers/userLoginReducer"
import * as BasketReducer from "../store/reducers/basketReducer"
import * as FavoriteReducer from "../store/reducers/favoriteReducer"
import * as CellProductsReducer from "../store/reducers/cellProductsReducer"
import * as PopularProductsReducer from "../store/reducers/popularProductsReducer"
import * as SimilarProductsReducer from "../store/reducers/similarProductsReducer"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...CategoriesReducer,
        ...SubCategoriesReducer,
        ...ProductsReducer,
        ...ProductReducer,
        ...FlowerReducer,
        ...UserReducer,
        ...UserLoginReducer,
        ...BasketReducer,
        ...FavoriteReducer,
        ...CellProductsReducer,
        ...PopularProductsReducer,
        ...SimilarProductsReducer
    },  dispatch)
}