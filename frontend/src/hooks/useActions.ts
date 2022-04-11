import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionCreators from "../store/reducers/userReducer"
import * as CategoriesActionCreators from "../store/reducers/categoriesReducer"
import * as SubCategoriesActionCreators from "../store/reducers/subCategoriesReducer"
import * as ProductsActionCreators from "../store/reducers/productsReducer"
import * as ProductActionCreators from "../store/reducers/productReducer"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...UserActionCreators,
        ...CategoriesActionCreators,
        ...SubCategoriesActionCreators,
        ...ProductsActionCreators,
        ...ProductActionCreators
    },  dispatch)
}