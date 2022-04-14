import {ProductsState} from "../../types/products";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../api/ProductsAPI";
const initialState : ProductsState = {
    products: [],
    status: false,
    error: '',
    loading: false,
    pages: 0
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
                console.log('products', action)
                state.loading = false
                state.products = action.payload?.data.products
                state.status = true
                state.pages = action.payload?.data.pages
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



