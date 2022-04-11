import {ProductState} from "../../types/product";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProduct, createProduct} from "../../action-creators/ProductActionCreators";


const initialState : ProductState = {
    product: {},
    status: false,
    error: '',
    loading: false
}
export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (args: object) => {
        return await getProduct(args);
    }
)

export const fetchCreateProduct = createAsyncThunk(
    'product/fetchCreateProduct',
    async (data: object) => {
        return await createProduct(data);
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, state => {
                state.loading = true
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                console.log('products', action.payload)
                state.loading = false
                // @ts-ignore
                state.products = action.payload.data
                state.status = true
            })
            .addCase(fetchProduct.rejected, state => {
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const { reducer } = productSlice

export default reducer
