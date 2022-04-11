import {ProductsState} from "../../types/products";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../action-creators/ProductsActionCreators";
const initialState : ProductsState = {
    products: [
        {id: 1, name: "Розы", price: 1500, subCategoryId: 1, views: 100},
        {id: 2, name: "Тюльпаны", price: 1500, subCategoryId: 1, views: 100},
        {id: 3, name: "Синицы", price: 1500, subCategoryId: 1, views: 100},
        {id: 4, name: "Подсолнухи", price: 1500, subCategoryId: 1, views: 100},
        {id: 5, name: "Лопухи", price: 1500, subCategoryId: 1, views: 100},
        {id: 6, name: "Сам ты лопух", price: 1500, subCategoryId: 1, views: 100},
        {id: 7, name: "АВАВ", price: 1500, subCategoryId: 1, views: 100}
    ],
    status: false,
    error: '',
    loading: false
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (args: object) => {
        return await getProducts(args);
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                console.log('products', action.payload)
                state.loading = false
                // @ts-ignore
                state.products = action.payload.data
                state.status = true
            })
            .addCase(fetchProducts.rejected, state => {
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const { reducer } = productsSlice

export default reducer



