import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserReducer from "../store/reducers/userReducer"
import * as CategoriesReducer from "../store/reducers/categoriesReducer"
import * as SubCategoriesReducer from "../store/reducers/subCategoriesReducer"
import * as ProductsReducer from "../store/reducers/productsReducer"
import * as ProductReducer from "../store/reducers/productReducer"
import * as FlowerReducer from "../store/reducers/flowerReducer"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...UserReducer,
        ...CategoriesReducer,
        ...SubCategoriesReducer,
        ...ProductsReducer,
        ...ProductReducer,
        ...FlowerReducer
    },  dispatch)
}