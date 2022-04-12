import {ProductsState} from "../../types/products";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../action-creators/ProductsActionCreators";
const initialState : ProductsState = {
    products: [],
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



