import {CellProductsState} from "../../types/products";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPopularProducts} from "../../api/index";
const initialState : CellProductsState = {
    products: [],
    status: false,
    error: '',
    loading: false
}

export const fetchPopularProducts = createAsyncThunk(
    'popularProducts/fetchPopularProducts',
    async () => {
        return await getPopularProducts();
    }
)


const popularProductsSlice = createSlice({
    name: 'popularProducts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // Получение товаров
            .addCase(fetchPopularProducts.pending, state => {
                state.loading = true
            })
            .addCase(fetchPopularProducts.fulfilled, (state: CellProductsState, action) => {
                console.log('cellProducts', action)
                state.loading = false
                state.products = action.payload.data
                state.status = action.payload.status
            })
            .addCase(fetchPopularProducts.rejected, state => {
                state.loading = false
            })

            .addDefaultCase(() => {
            })
    }
})

const { reducer } = popularProductsSlice

export default reducer



