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
        ...BasketReducer
    },  dispatch)
}